import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users=[];

  constructor(
    //variable del servicio
    public userService:UserService
  ) { 
    this.users=userService.getUsers();
    console.log(this.users);
  }

  ngOnInit() {
  }

}
