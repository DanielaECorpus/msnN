import { Component, OnInit } from '@angular/core';
import {UsersFirebaseService} from '../users-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombreUser:string;
  nickUser:string;
  subNickUser:string;
  emailUser:string;
  statusUser:string;
  avatarUser:string;
  constructor(
    public userFirebaseService:UsersFirebaseService
  ) { }

  ngOnInit() {
  }

  //para agregar creamos el objeto a agregar y su id (en este caso sera una cada vez lo que tenga Date)
    //este tambien regresa una promesa y no un string
    addUser(){
      const user={
        name:this.nombreUser,
        status:this.statusUser,
        nick:this.nickUser,
        subNick:this.subNickUser,
        email:this.emailUser,
        avatar:this.avatarUser,
        user_id:Date.now()
      };
      //insertamos el objeto
      const promise=this.userFirebaseService.createUser(user);
      promise.then(()=>{
        alert('Usuario agregado ;)');
      }).catch((error)=>{
        alert('No se pudo agregar el usuario');
        console.log(error);
      });
    }

}
