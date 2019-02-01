// Angular Modules
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

// Components
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ExampleComponent} from './example/example.component';
import {UsersComponent} from './users/users.component';
import {AppSidebarComponent} from './sidebar/appSidebar.component';
import {UserComponent} from './user/user.component';

// Container Components
import {AppContainerComponent} from './appContainer.component';
import {AppSidebarContainerComponent} from './sidebarContainer/appSidebarContainer.component';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';


// routes
export const appContainerRoutes: Routes = [
  {
    // This is a simple redirect to send users to /home on the default route
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // This component holds the header and footer and gets loaded by default so every page has the header and footer elements
    component: AppContainerComponent,
    children: [
      {
        path: '',
        // This component gets loaded by defult inside the AppConatinerComponent and serves as formatting for children components
        // The AppSidebarContainerComponent contains two router-outlets to allow for modular swapping of components
        component: AppSidebarContainerComponent,
        children: [
          {
            // This component gets output in the default router-outlet
            path: '',
            component: HomeComponent
          },
          {
            // This component gets output in the router-outlet with the 'sidebar' name
            path: '',
            outlet: 'sidebar',
            component: AppSidebarComponent
          }
        ]
      }
    ]
  },
  {
    // This is the base route that get navigated to
    path: 'dashboard',
    component: AppContainerComponent, // This is so the header and footer will be contained in the final page
    children: [
      {
        path: '',
        // Initially loads the sidebar container so the proper formatting can be applied for this route
        component: AppSidebarContainerComponent,
        children: [
          {
            // The Dashboard Module gets loaded at the default route due to a bug with the angular router that doesnt allow for
            // lazy loading to be output on an outlet
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
          },
          {
            // Using a basic component for the outlet for it to work properly
            path: '',
            outlet: 'sidebar',
            component: AppSidebarComponent
          }
        ]
      }
    ]
  },
  {
    path: 'form',
    component: AppContainerComponent, // This is so the header and footer will be contained in the final page
    children: [
      {
        path: '',
        // Initially loads the sidebar container so the proper formatting can be applied for this route
        component: AppSidebarContainerComponent,
        children: [
          {
            // The Dashboard Module gets loaded at the default route due to a bug with the angular router that doesnt allow for
            // lazy loading to be output on an outlet
            path: '',
            loadChildren: './form/form.module#FormModule'
          },
          {
            // Using a basic component for the outlet for it to work properly
            path: '',
            outlet: 'sidebar',
            component: AppSidebarComponent
          }
        ]
      }
    ]
  },
  {
    path: 'user/:id',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: AppSidebarContainerComponent,
        children: [
          {
            path: '',
            component: UserComponent
          },
          {
            path: '',
            outlet: 'sidebar',
            component: AppSidebarComponent
          }
        ]
      }
    ]
  },
  {
    path: 'search/:query',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: AppSidebarContainerComponent,
        children: [
          {
            path: '',
            component: SearchComponent
          },
          {
            path: '',
            outlet: 'sidebar',
            component: AppSidebarComponent
          }
        ]
      }
    ]
  },
  {
    // This is an example of a component without the AppSidebarContaienrComponent
    path: 'example',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: ExampleComponent
      }
    ]
  },
  {
    path: 'noContainer',
    component: ExampleComponent
  },
  {
    path: 'users',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: AppSidebarContainerComponent,
        children: [
          {
            path: '',
            component: UsersComponent
          },
          {
            path: '',
            outlet: 'sidebar',
            component: AppSidebarComponent
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // This router handles all the routes that come from /user
    RouterModule.forChild(appContainerRoutes)
  ],
  declarations: [
    // Declaring the components that are being used with this module
    AppContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExampleComponent,
    AppSidebarComponent,
    AppSidebarContainerComponent,
    UserComponent,
    SearchComponent,
    UsersComponent
  ]
})
export class AppContainerModule {
}
