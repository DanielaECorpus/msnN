import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//importamos FormsModule para que funcionara el ngModule
import {FormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { Routes, RouterModule } from '@angular/router';

//para FIREBASE
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'conversation/:userId',component:ConversationComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversationComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
