import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbActionsModule,
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import {ThemeModule} from './../../@theme/theme.module';
import {ContactFormComponent} from './contact-form.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ThemeModule,
    NbMenuModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbAutocompleteModule,
    RouterModule,
  ],
  declarations: [
    ContactFormComponent,
  ],
})
export class ContactFormModule {
}
