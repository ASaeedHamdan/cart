import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ShopingCartService } from '../../services/shoping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{
  products:any[] = [];
  filteredProducts:any[] = [];
  category='';
  subscribe:Subscription;
  cart;
 // categories$;

  constructor(
              private prodSer:ProductsService ,
              private catSer:CategoriesService ,
              private myroute:ActivatedRoute,
              private shopingCartSer:ShopingCartService

              )
  {
    // this.categories$ = this.catSer.getcategories();
     this.prodSer.getProducts().subscribe(products=>{
     this.products = products;
     // read value of category name that coming from link url
     this.myroute.queryParamMap.subscribe(param=>{
       this.category = param.get('category');
       this.filteredProducts = (this.category)?
        this.products.filter(p=>p.payload.val().Category === this.category) : this.products
     })

   });
   }

  async ngOnInit(): Promise<void> {
   (await this.shopingCartSer.getCart()).valueChanges().subscribe(cart=>{
     this.cart = cart;
     console.log(cart);

   })
  }
  ngOnDestroy(): void {
   this.subscribe.unsubscribe();
  }


}
