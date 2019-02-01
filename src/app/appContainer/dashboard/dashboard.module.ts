// Angular Modules
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {DashboardComponent} from './dashboard.component';
import {ChartsModule} from 'ng2-charts';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    // This router handles all the routes that come from /user
    RouterModule.forChild(DashboardRoutes),
    ChartsModule
  ],
  declarations: [
    // Declaring the components that are being used with this module
    DashboardComponent
  ]
})
export class DashboardModule {
}
