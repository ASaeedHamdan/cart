import { Injectable, Injector } from '@angular/core';
/* to access authentication */
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
/* to access some methods in  firebase  like auth and we will use it */
import firebase from 'firebase/compat/app';
import { observable, Observable } from 'rxjs';
import { of } from 'rxjs';
import { switchMap  } from 'rxjs/operators';
import { UserService } from './user.service';
import { UserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User> ;            // user:firebase.User //equal to this


 constructor(
   private AFauth:AngularFireAuth ,
   private route:ActivatedRoute ,
   private userser:UserService, private injector:Injector)
    {
       this.user$ =  AFauth.authState ;   // AFauth.authState.subscribe(user=> this.user = user) ;// equal this
    }

    login(){
      let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
      localStorage.setItem('returnUrl',url);
      this.AFauth.signInWithRedirect( new firebase.auth.GoogleAuthProvider )
    }

  logOut(){
   this.AFauth.signOut();
  }

  get appUser$():Observable<UserInfo> {
    return this.user$.pipe(switchMap((user) =>{
      if(user){
        return this.userser.getUser(user.uid).valueChanges();
      }
      else{

        return of(null)
      }

    }))



}
}
