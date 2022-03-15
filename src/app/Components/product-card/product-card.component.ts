import { Component, Input, OnInit } from '@angular/core';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product:any;
@Input('shopingCart') shopingCart;
  constructor( private shopCartSer:ShopingCartService) {
    console.log(this.product);

   }

  ngOnInit(): void {
  }


  addToCart(){
    this.shopCartSer.addTocart(this.product);
    //alert("success");
  }
  removeFromCart(){
    this.shopCartSer.RemoveFromCart(this.product);
  }

  getQuantity(){
    if(!this.shopingCart){ return 0;}
    let item = this.shopingCart.items[this.product.key]; //   المنتج دا اللي ليه ال كي دا موجود يعني متضاف هاته وحطه ف ال item
    return item?item.quantity : 0; // لو الايتم دا موجود ومتضاف هات الكميه بتاعته ولو مش موجود حط مكانه صفر
  }
}
