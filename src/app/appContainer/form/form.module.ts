// Angular Modules
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import {FormComponent} from './form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: FormComponent
  }
];

@NgModule({
  imports: [
    // This router handles all the routes that come from /user
    RouterModule.forChild(DashboardRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    // Declaring the components that are being used with this module
    FormComponent
  ]
})
export class FormModule {
}
