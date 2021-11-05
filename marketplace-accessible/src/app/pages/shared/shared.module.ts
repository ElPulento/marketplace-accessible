import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ImgPickerComponent } from './components/imgPicker/img-picker.component';



@NgModule({
  declarations: [
    CharacterCounterComponent,
    ImgPickerComponent,
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbIconModule,
    NbEvaIconsModule,
    NbButtonModule,
    
  ],
  exports: [
    CharacterCounterComponent,
    ImgPickerComponent,
  ],
})
export class SharedModule { }
