import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UsersFirebaseService } from '../users-firebase.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variables login
  name:string;
  email:string;
  password:string;
  repeatpasword:string;

  //para guardar el id que se crea cuando se registra el usuario
  registerUId:any;

  //var para guardar el uid que se genera cuando te logueas
  logUId:any;
  //para obtener el objeto usuario del id del logueo
  usuario:any;

  constructor(
    public authenticationService:AuthenticationService,
    public userFirebaseService:UsersFirebaseService
    //,public userService:UserService
  ) { }

  ngOnInit() {
  }

  //metodo para loguarse
  register(){
    //mandamos llamar el servicio que exite en authentication.service.ts
    const promise=this.authenticationService.emailRegistration(this.email,this.password);
    promise.then((data)=>{
      alert('Usuario registrado');
      //mostramos la info que regresa el registro
     // console.log(data);
      //leasignamos el valor del uid que se genera a la variable creada
      this.registerUId=data.user.uid;
      //llamamos el metodo de registro creado y le enviamos el id generado en el registro
      this.insertOnDatabase(this.registerUId);
     // console.log(this.registerUId);
    }).catch((error)=>{
      alert('Hubo un error');
      console.log(error);
    });
  }

  //metodo para insertar el uid que se genera en el registro y vincularlo con un usuario
  insertOnDatabase(uid){
    //creamos el objeto de usuario de registro
   const user={
      user_id:uid,
      name:this.name,
      email:this.email
   } ;
   //enviamos el objeto al metodo que esta en el servicio
  const promise= this.userFirebaseService.createUser(user);
  promise.then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  });
  }

  //metodo para loguarse
  login(){
    //llamamos el metodo que esta en el servicio y le damos los parametros
    const promise=this.authenticationService.emailLogin(this.email,this.password);
    promise.then((data)=>{
      alert('Logueado con exito');
      console.log(data);

      //leasignamos el valor del uid que se genera a la variable creada
      this.logUId=data.user.uid;
      //llamamos el metodo para buscar por id
      //this.usuario=this.userService.getUserById(this.logUId);
      const stream=this.userFirebaseService.getUserByUId(this.logUId);
      stream.valueChanges().subscribe((result)=>{
        console.log(result);
      });
    }).catch((error)=>{
      alert('Ocurrio un error');
      console.log(error);
    });
  }
}
