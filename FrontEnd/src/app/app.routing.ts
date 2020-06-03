import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import {AuthGuard} from "./_helpers/auth.guard.ts"

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page"
    }
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],

    data: {
      title: "Home"
    },
    children: [
      {
        path: "base",
        loadChildren: () =>
          import("./views/base/base.module").then(m => m.BaseModule)
      },
     {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      },
   
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            m => m.NotificationsModule
          )
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then(m => m.ThemeModule)
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then(m => m.WidgetsModule)
      },
      {
        path: "company-assets",
        loadChildren: () =>
          import("./views/company-assets/company-assets.module").then(m => m.CompanyAssetsModule)
      },
      {
        path: "securityandcomunication",
        loadChildren: () =>
          import("./views/securityandcomunication/securityandcomunication.module").then(m => m.SecurityandcomunicationModule)
      }
    ]
  },
  { path: "**", component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
