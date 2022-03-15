import { shoppingcartItems } from "./shoppingCartitems";

export class shoppingCart{
  items:shoppingcartItems[];
  getTotalCount(){
    let counter = 0 ;
    for(let productID in this.items){
      counter += this.items[productID].quantity;
    }
  }
}
