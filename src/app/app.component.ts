import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // first we should inject a routing module
  // we inject via constructor
  // so angular will make an instance of the router 
  // and then when making an instance of the Appcomponent the router will be injected to be used in the methods
  public currentRoute: any;
constructor(private router : Router){
}
goToUsers() {
  this.currentRoute = 'users'; // we use this to change styles in app module
  // using data binding  
  this.router.navigateByUrl("/users");
}
goToHome() {
  this.currentRoute = 'home'; // we use this to change styles in app module 
  this.router.navigateByUrl("/home");

}
  title = 'project3'; // this is a variable
}
