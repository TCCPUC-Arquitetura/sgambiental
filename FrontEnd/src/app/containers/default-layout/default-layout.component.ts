import { Component } from "@angular/core";
import { navItems } from "../../menu/_nav";
import { Router, NavigationEnd } from "@angular/router";
import {AuthenticationService} from "../../_services/authentication.service.ts.service"
import {UserService} from "../../_services/user.service"



@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html"
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(private router: Router, private authenticationService: AuthenticationService, private userService:UserService  ) {}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  

  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
}
}
