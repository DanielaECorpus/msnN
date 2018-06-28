import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {UsersFirebaseService} from '../users-firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users=[];

  //variable para guardar los usuarios que vendran desde firebase
  usersFireB:any;

  constructor(
    //variable del servicio
    public userService:UserService,
    public userFirebaseService:UsersFirebaseService

  ) { 
    this.users=userService.getUsers();
    console.log(this.users);

    //FIREBASE
    //en lugar de tomar la lista en un arreglo lo guardamos en una variable 
    const stream=userFirebaseService.getUsers();
    //mediante esto nos sucribimos a la lista y asi obtener la( y no el objeto)
    stream.valueChanges().subscribe((result) =>{
      //asignamos el result a la variable users para desplegar la en el componente
      this.usersFireB=result;
      console.log(result);
    });
    console.log(this.usersFireB);
  }

  ngOnInit() {
  }

}
