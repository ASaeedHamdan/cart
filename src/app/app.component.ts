import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private authserve:AuthService , private userser:UserService , private route:ActivatedRoute , private Router : Router){
       this.authserve.user$.subscribe(user=>{
         if(user){
              this.userser.save(user);
              let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
              Router.navigateByUrl(url)
         }
       })

  }
}
