import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';
import { Product } from '../../models/Product';
take


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  catetegories$:any;
  productID;
  actionbtn : string;

  proudct={
    id:'',
    title: '',
    price: '',
    Category: '',
    imgurl: ''
  };


  constructor(private catSer:CategoriesService  , private prodSer:ProductsService , private route:Router , private myroute:ActivatedRoute)
  {

    this.catetegories$ = this.catSer.getcategories();

     this.productID = this.myroute.snapshot.paramMap.get('id');

     if(this.productID == "new"){
       this.actionbtn = "Save"
     }else{
      this.actionbtn = "Update";
     }

    if(this.productID)  // this mean that there is an elememt founded
    {
         this.prodSer.getById(this.productID).pipe(take(1)).subscribe((p:any) =>{
          if(p)
          {
            this.proudct = p;
            console.log(p);
          }
          else{console.log("sorry");}
       })
    }

   }

  ngOnInit(): void {
  }


  // save products to database
  save(prod){

    if(this.productID == "new") //  mean that this from coming from new product button to create product
     {
        this.prodSer.creatProduct(prod);
        alert("product added successfully");
     }
    else  //mean that this form coming from edit button with product id
      {
        this.prodSer.update(this.productID , prod);
        alert("product updated successfully");
      }

       this.route.navigateByUrl('/admin/products');

  }


}
