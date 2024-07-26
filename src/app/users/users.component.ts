import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
search(): void{
  // first we loop between users
  // and we compare the keyword with the name 
  // then we declare a string of objects 
  /*let result : any[] = [];
  for (let u of this.users) {
    if(u.username.includes(this.keyword)){
      result.push(u);
    }
  }
  this.users = result;*/
  // we can use the filter array method that takes in an arrow function (lambda expression)
  this.users = this.users.filter((user:any) => user.username.includes(this.keyword));
}

  // here we will declare an array of users just for the sake if the demo
  // let numbers: number[] = [1, 2, 3, 4, 5];
  // in our case users will have javascript objects 
  public users:any;
  public keyword:string = ""; 
  constructor(){

  }
  // here we implement our method
  ngOnInit(): void {
    this.users = [
      {"id":1,"username":"mouad", "role":"ADMIN"},
      {"id":2,"username":"sarah", "role":"ADMIN"},
  
      {"id":3,"username":"ahmed", "role":"ADMIN"}
  
  
    ];
  }
  deleteUser(u: any) {
    let index = this.users.indexOf(u); // here we get the index of the user to delete 
    this.users.splice(index,1);
  }

}
