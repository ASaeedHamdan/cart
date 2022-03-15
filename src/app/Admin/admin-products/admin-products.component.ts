import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy ,OnInit{
  products:any[];
  fillteredProduct :any[];
  subscribe:Subscription;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private prodSer:ProductsService ,private route:Router )
  {
     this.subscribe =  this.prodSer.getProducts().subscribe(products=>
      {
           this.fillteredProduct = this.products = products;
           console.log(this.products);
           this.dtTrigger.next();   // Calling the DT trigger to manually render the table

      }
  );


   }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [ 5, 10,15, 20],
    };
  }



  delete(key){

     this.prodSer.delete(key);
     alert("product deleted successfully");
     this.route.navigateByUrl('/admin/products');
  }
  filter(val){
    if(val)
    {
        this.fillteredProduct = this.products.filter(
          p=>p.payload.val().title.toLowerCase().includes(val.toLowerCase())); //filter by title

        this.fillteredProduct = this.products.filter(
          p=>p.payload.val().price.includes(val));  //filter by price

        this.fillteredProduct = this.products.filter(
          p=>p.payload.val().Category.includes(val));  //filter by Category
    }
    else
    {
      this.fillteredProduct = this.products;
    }
  }



  ngOnDestroy(): void {
     this.subscribe.unsubscribe(); // اول ميجيب الداتا كلها ويخلص وقفه واعمل destroy
     this.dtTrigger.unsubscribe();
  }

}
