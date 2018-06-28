import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersFirebaseService {

  user={};
  constructor(
    //creamos una variable de tipo firebase
    public angularFireDatabase:AngularFireDatabase
  ) { }

  //metodo para acceder a la libreria de firebase
  getUsers(){
    //accedemos a la bd de firebase (nos regresara una lista en este caso de usuarios)
                              //---nombre del nodo que creamos en FIREBASE
    return this.angularFireDatabase.list('usersM');
  }

  //metodo agregar
  createUser(user){
      //a que nodo, el id que generaremos para ese usuario y se lo asignamos a la variable user
  return this.angularFireDatabase.object('usersM/' + user.user_id).set(user);
  }

  //metodo buscar por id
getUserByUId(user_id){
    //a que nodo, el id que generaremos para ese usuario y se lo asignamos a la variable user
return this.angularFireDatabase.object('usersM/' +user_id);
}
}
