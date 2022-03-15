import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import firebase from 'firebase/compat';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserInfo } from '../models/userInfo';

//import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor( private db:AngularFireDatabase) { }
  save(user:firebase.User){
    this.db.object('/users/' + user.uid).update({
      name:user.displayName ,
      email:user.email,

    })
  }

  // get user
  getUser(uid:string){
    return this.db.object('/users/' + uid);
  };



  }
