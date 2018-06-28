import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    //variable de para firebase
    public angularFireDatabase:AngularFireDatabase,
    //variable del servicio de autenticacion de firebase
    public angularFireAuth:AngularFireAuth
  ) { }

  //metodo de regitro 
  emailRegistration(email,password){
    //referenciando a la autenticacion de firebase mediante email y password
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  //metodo de login
  emailLogin(email,password){
     //referenciando a la autenticacion de firebase mediante email y password
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password);
  }
}
