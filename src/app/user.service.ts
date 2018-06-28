import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users=[
  {nick:'Mi nick',subNick:'Mi subnick',avatar:'avatar.jpg',status:'online',email:'mi@email.com',userId:1},
  {nick:'Mi nick 2',subNick:'Mi subnick',avatar:'avatar.jpg',status:'online',email:'mi@email.com',userId:2},
  {nick:'Mi nick 3',subNick:'Mi subnick',avatar:'avatar.jpg',status:'online',email:'mi@email.com',userId:3},
  {nick:'Mi nick 4',subNick:'Mi subnick',avatar:'avatar.jpg',status:'online',email:'mi@email.com',userId:4}
];

iconos=['/assets/img/angel_smile.gif','/assets/img/brb.gif','/assets/img/confused_smile.gif','/assets/img/dont_know.gif','/assets/img/drowsy.gif'];
  constructor() { }

  //regresa todos los usuarios 
  getUsers(){
    return this.users;
  }
  //para regresar usuario por id
  getUserById(userId){
    //objeto vacio
    let user={};
    //debugger;
    //filtramos la busqueda por id y retornamos un arreglo con el elemento a buscar 
    user=this.users.filter((u) =>{
      return u.userId === userId;
    }) [0];  ///ponemos este cero para solo regrese el elemento y no en formato de arreglo 
    return user;
  }

  //regresa arreglo iconos
  getIconos(){
    return this.iconos;
  }
}
