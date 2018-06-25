import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementArrayFinder } from 'protractor';
import { UserService } from '../user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  //creamos una variable de tipo any ya que no sabemos de que tipo sera
  userId:any;
  //variable objeto para el amigo
  friend={};

  constructor(
    public activateRoute:ActivatedRoute,
    public userService:UserService
  ) { 
    //asingamos el userId que viene desde home component
    this.userId=activateRoute.snapshot.params['userId'];
    console.log(this.userId);
    //conveertimos el id ya que la cadena de url la envia como string y en el arreglo esta como number
    this.userId=parseInt(this.userId);
    //asignamos a la variable friend la busqueda por id (la cual retorna el objeto con ese id )
    this.friend=userService.getUserById(this.userId);
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
