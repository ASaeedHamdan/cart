import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { take } from 'rxjs/operators';
import { shoppingCart } from '../models/shoppingCart';
take
@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  constructor(private db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shoping-cart').push({
      dateCreated: new Date().getTime()
    })
  }
  public async getCart():Promise<AngularFireObject<shoppingCart>>{
    let cartid =await this.getOrcreateCartID();
    return this.db.object('/shoping-cart/' + cartid ); // return all items added
  }

  private async getOrcreateCartID(){
    let CartID = localStorage.getItem("CartID");
    if(CartID) return CartID;
    let result =await this.create();
    localStorage.setItem("CartID",result.key);
    return result.key;
  }

  getItem(cartid:string , productID:string){
    return this.db.object('/shoping-cart/' + cartid + '/items/' + productID)
  }

  async addTocart(product){
       this.updateTocart(product, +1)
    }
    async RemoveFromCart(product){
      this.updateTocart(product, -1)
   }


    async updateTocart(product , quantityState){
      let cartid =await this.getOrcreateCartID(); // كل العمليات اللي بعدها هتستني لما دي تخلص بنجاح عشان تبدا ولو منجحتش كل اللي بعدها مش هيتنفذ

      let item$ = this.getItem(cartid , product.key);
      item$.snapshotChanges().pipe(take(1)).subscribe((item:any)=>{
        if(item.payload.exists()){
          item$.update({quantity:item.payload.val().quantity + quantityState})
        }else{
          item$.update({
           product:{
             title: product.payload.val().title,
             price: product.payload.val().price,
             Category: product.payload.val().Category,
             imgurl: product.payload.val().imgurl,
           }
           ,quantity:1
          })
        }
      })
     }


}
