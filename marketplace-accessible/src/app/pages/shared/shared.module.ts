import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';



@NgModule({
  declarations: [
    CharacterCounterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterCounterComponent,
  ],
})
export class SharedModule { }
