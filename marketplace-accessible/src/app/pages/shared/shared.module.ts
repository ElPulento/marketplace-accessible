import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [
    CharacterCounterComponent,
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
  ],
})
export class SharedModule { }
