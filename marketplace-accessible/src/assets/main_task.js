/**************/
/** Constants */
/**************/
const nrating = 3;
const nchoices = 1;
const fixation_duration = 500;
const nprac = 3;
const nImageInst = 2;
const realCaliDot = 1;


function startCalibration() {
  console.log("entre a maintask");

  //start the webgazer tracker
  webgazer.setRegression('ridge') /* currently must set regression and tracker */
    .setTracker('clmtrackr')
    .setGazeListener(function(data, clock) {
      if (data == null) {
          return
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      // console.log(xprediction);
      return xprediction;
      // var yprediction = data.y; //these y coordinates are relative to the viewport
      // console.log(elapsedTime); //elapsed time is based on time since begin was called
    })
    .begin()
    .showPredictionPoints(true) /* shows a square every 100 milliseconds where current prediction is */
    .saveDataAcrossSessions(true);

  //Set up the webgazer video feedback.
  var setup = function() {

    //Set up the main canvas. The main canvas is used to calibrate the webgazer.
    var canvas = document.getElementById("plotting_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    
  };
  setup();

};
