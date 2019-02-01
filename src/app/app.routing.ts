import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  // To be able to lazy load components / modules, you need to call loadChildren and provide the path for the base module.
  // The canActivate takes a guard class which does logic to determine whether or not a route can be routed to.
  { path: '', loadChildren: './appContainer/appContainer.module#AppContainerModule', canActivate: [AuthGuard] },

  // These routes are directly to components. These components will be bundled with the app.module and loaded into the browser by default
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
