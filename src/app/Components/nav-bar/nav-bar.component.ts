import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from '../../models/userInfo';
import { ShopingCartService } from '../../services/shoping-cart.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

appuser:UserInfo;
shoppingCartCounter = 0;
  constructor( public service:AuthService , private shopCartSer:ShopingCartService) {
    this.service.appUser$.subscribe(newuser=>
      {
      this.appuser = newuser;
      console.log(newuser);
      console.log(this.appuser);

    });



   }
 logOut(){
 this.service.logOut();
 }
  async ngOnInit()
  {
   let cart$ = await this.shopCartSer.getCart();
   cart$.valueChanges().subscribe(cart=>{
    this.shoppingCartCounter = 0;
    console.log(cart.items);

     for(let productID in cart.items)
     {
       this.shoppingCartCounter += cart.items[productID].quantity;
     }
   })
  }

}
