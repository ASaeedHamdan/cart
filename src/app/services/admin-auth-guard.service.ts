import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor( private authserv:AuthService , private injector:Injector) { }
  canActivate()
  {
    return this.authserv.appUser$.pipe(map((appuser:any)=>appuser.isAdmin ));
  }
}
