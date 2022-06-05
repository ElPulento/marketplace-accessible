/**************/
/** Constants */
/**************/
const nrating = 3;
const nchoices = 1;
const fixation_duration = 500;
const nprac = 3;
const nImageInst = 2;
const realCaliDot = 1;

/**************/
/** Public variables */
/**************/
var store_predictions = false;

var eye_data = new Array();

var xPast50 = new Array(50);
var yPast50 = new Array(50);

var RecordingExperiment = false;


function startCalibration() {

  //start the webgazer tracker
  webgazer.setRegression('ridge') /* currently must set regression and tracker */
    .setTracker('clmtrackr')
    .setGazeListener(function(data, clock) {
      if (data == null) {
          return
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y;
      
      if(store_predictions){
        let ruta = window.location.href;
        let timestamp = getTimestamp();
        store_gazepoints(xprediction, yprediction,ruta,timestamp);
      }
      // console.log(xprediction);
      return xprediction;
      // var yprediction = data.y; //these y coordinates are relative to the viewport
      // console.log(elapsedTime); //elapsed time is based on time since begin was called
    })
    .begin()
    .showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */
    
  // Set to true if you want to save the data even if you reload the page.
  window.saveDataAcrossSessions = true;

  //Set up the webgazer video feedback.
  var setup = function() {

    //Set up the main canvas. The main canvas is used to calibrate the webgazer.
    var canvas = document.getElementById("plotting_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    
  };
  setup();

  PopUpInstruction();
};

function reset_eye_data(){
  eye_data = new Array();
}

function PopUpInstruction(){
  // ClearCanvas();
  alert('Hace click en los 9 puntos en la pantalla.\nDebes hacer click 5 veces hasta que se pongan amarillos.');
  ShowCalibrationPoint();
}

function PopUpInstructionPrediction(){
  alert('Ahora debes procurar observar el punto del centro.\nEsto determinará la precisión de la calibración.\nFija tu mirada en el punto antes de hacer click en "Aceptar".');
}

function ShowCalibrationPoint() {
  $(".Calibration").show();
  $("#Pt5").hide(); // initially hides the middle button
}

// sleep function because java doesn't have one, sourced from http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function getTimestamp(){
  let date = new Date();
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZone: 'America/Santiago',
    timeZoneName: 'short'
  };
  
  // sometimes you want to be very precise
  options.fractionalSecondDigits = 2; //number digits for fraction-of-seconds

  let timestamp = new Intl.DateTimeFormat('en-AU', options).format(date);

  return timestamp;
}

/** PROCESO DE CALIBRACION
 * Load this function when the index page starts.
* This function listens for button clicks on the html page
* checks that all buttons have been clicked 5 times each, and then goes on to measuring the precision
*/

var PointCalibrate = 0;
var CalibrationPoints={};

$(document).ready(function(){

     $(".Calibration").click(function(){ // click event on the calibration buttons

      var id = $(this).attr('id');

      if (!CalibrationPoints[id]){ // initialises if not done
        CalibrationPoints[id]=0;
      }
      CalibrationPoints[id]++; // increments values

      if (CalibrationPoints[id]==5){ //only turn to yellow after 5 clicks
        $(this).css('background-color','yellow');
        $(this).prop('disabled', true); //disables the button
        PointCalibrate++;
      }else if (CalibrationPoints[id]<5){
        //Gradually increase the opacity of calibration points when click to give some indication to user.
        var opacity = 0.2*CalibrationPoints[id]+0.2;
        $(this).css('opacity',opacity);
      }

      //Show the middle calibration point after all other points have been clicked.
      if (PointCalibrate == 8){
        $("#Pt5").show();
      }

      if (PointCalibrate >= 9){ // last point is calibrated
            //using jquery to grab every element in Calibration class and hide them except the middle point.
            $(".Calibration").hide();
            $("#Pt5").show();
            PopUpInstructionPrediction();            

            $(document).ready(function(){

              store_predictions_variable(); // start storing the prediction points
              
              sleep(5000).then(() => {
                  stop_storing_points_variable(); // stop storing the prediction points
                                    
                  var past50 = getLast50Points(); // retrieve the stored points
                                    
                  var precision_measurement = calculatePrecision(past50);
                                    
                  alert('La precisión es de: ' + precision_measurement + '%');
                  console.log('Model accuracy: ' + precision_measurement + '%');

              });

            });
            
      }

    });

});

function startExperiment(){
  reset_eye_data(); //resets eye_data array

  webgazer.showPredictionPoints(false); //hide gazedot

  RecordingExperiment = true; //change flag
  toggle_header_btn();

  hideVideoCanvas();

  alert('Has comenzado el intento.\nÉxito!');

  store_predictions_variable(); //changes predictions variable to true
}

function hideVideoCanvas(){
  document.getElementById("renderCanvas").style.display = "none";
  document.getElementById("webgazerVideoFeed").style.display = "none";
  document.getElementById("webgazerVideoCanvas").style.display = "none";
  document.getElementById("webgazerFaceOverlay").style.display = "none";
  document.getElementById("webgazerFaceFeedbackBox").style.display = "none";
}


/* PRECISION_CALCULATION.JS
 * This function calculates a measurement for how precise 
 * the eye tracker currently is which is displayed to the user
 */
function calculatePrecision(past50Array) {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  // Retrieve the last 50 gaze prediction points
  var x50 = past50Array[0];
  var y50 = past50Array[1];

  // Calculate the position of the point the user is staring at
  var staringPointX = windowWidth / 2;
  var staringPointY = windowHeight / 2;

  var precisionPercentages = new Array(50);
  calculatePrecisionPercentages(precisionPercentages, windowHeight, x50, y50, staringPointX, staringPointY);
  var precision = calculateAverage(precisionPercentages);

  // Return the precision measurement as a rounded percentage
  return Math.round(precision);
};

/* 
 * Calculate percentage accuracy for each prediction based on distance of
 * the prediction point from the centre point (uses the window height as
 * lower threshold 0%)
 */
function calculatePrecisionPercentages(precisionPercentages, windowHeight, x50, y50, staringPointX, staringPointY) {
  for (x = 0; x < 50; x++) {
    // Calculate distance between each prediction and staring point
    var xDiff = staringPointX - x50[x];
    var yDiff = staringPointY - y50[x];
    var distance = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));

    // Calculate precision percentage
    var halfWindowHeight = windowHeight / 2;
    var precision = 0;
    if (distance <= halfWindowHeight && distance > -1) {
      precision = 100 - (distance / halfWindowHeight * 100);
    } else if (distance > halfWindowHeight) {
      precision = 0;
    } else if (distance > -1) {
      precision = 100;
    }

    // Store the precision
    precisionPercentages[x] = precision;
  }
}

/*
 * Calculates the average of all precision percentages calculated
 */
function calculateAverage(precisionPercentages) {
  var precision = 0;
  for (x = 0; x < 50; x++) {
    precision += precisionPercentages[x];
  }
  precision = precision / 50;
  return precision;
}

/* PRECISION_STORE_POINTS.JS
 * Sets store_points to true, so all the occuring prediction
 * points are stored
 */
function store_predictions_variable(){
  store_predictions = true;
}

function store_gazepoints(x, y, ruta, timestamp){
  let row = [x,y,ruta,timestamp];
  eye_data.push(row);
}

function getLast50Points(){
  
  let col = getCol(eye_data, 0); //Get first column
  xPast50 = col.slice(-50);

  col = getCol(eye_data, 1);
  yPast50 = col.slice(-50);

  return [xPast50, yPast50];
}

function getCol(matrix, col){
  var column = [];
  for(var i=0; i<matrix.length; i++){
     column.push(matrix[i][col]);
  }
  return column; // return column data..
}

/*
 * Sets store_points to false, so prediction points aren't
 * stored any more
 */
function stop_storing_points_variable(){
  store_predictions = false;
}

function export_eyedata_results(){
  RecordingExperiment = false; // change flag for btn header
  toggle_header_btn(); // esconder boton terminar y mostrar el btn start
  alert('Has terminado el experimento.\nGracias por participar, recuerde avisar al examinador.');
  stop_storing_points_variable();

  create_csv(eye_data);

  console.log(eye_data);
  return eye_data;
  
}

function create_csv(eye_data){
  let csvContent = "data:text/csv;charset=utf-8,";

  eye_data.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
  });

  console.log(csvContent);

  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  document.body.appendChild(link); 
  link.click();
}

function toggle_header_btn(){
  var startBtn = document.getElementById('start-btn');
  var endBtn = document.getElementById('end-btn');

  if (!RecordingExperiment){
    startBtn.style.display = 'block';
    endBtn.style.display = 'none';
  }else{
    startBtn.style.display = 'none';
    endBtn.style.display = 'block';
  }
}