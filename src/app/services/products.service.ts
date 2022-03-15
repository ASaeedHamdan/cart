import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db:AngularFireDatabase) { }



  creatProduct(product){
  this.db.list('/products').push(product);
  }

  getProducts(){
    return this.db.list('/products').snapshotChanges();
  }
  getById(productID:string){
    return this.db.object('/products/' + productID).valueChanges();
  }

 update(productID:string , Product){
    return this.db.object('/products/' + productID).update(Product);
  }

  delete(productID:string ){
    return this.db.object('/products/' + productID).remove();
  }

}
