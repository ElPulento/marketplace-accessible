import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import {
  NbBadgeModule,
  NbDatepickerModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule,
  NbToggleModule,
  NbTooltipModule,
  NbWindowModule,
  NbSpinnerModule,
  NbListModule,
  NbLayoutModule,
  NbActionsModule,
  NbDialogModule,
  NbChatModule,
  NbCheckboxModule,
  NbCalendarModule,
 
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../pages/shared/shared.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { eo, es } from 'date-fns/locale';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbActionsModule,
    NbSelectModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    NbIconModule,
    NbBadgeModule,
    NbDatepickerModule,
    NbFormFieldModule,
    NbInputModule,
    NbPopoverModule,
    NbStepperModule,
    NbTabsetModule,
    NbToggleModule,
    NbTooltipModule,
    NbWindowModule,
    NbSpinnerModule,
    NbListModule,
    NbDialogModule,
    NbActionsModule,
    FormsModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    SharedModule,
    NbCalendarModule,
    NbDateFnsDateModule.forChild({
			format: 'DD-MM-yyyy',
			parseOptions: { locale: eo },
			formatOptions: { locale: eo },
		}),
  ],
})
export class AuthModule {}
