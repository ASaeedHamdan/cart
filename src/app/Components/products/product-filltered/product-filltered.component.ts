import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'product-filltered',
  templateUrl: './product-filltered.component.html',
  styleUrls: ['./product-filltered.component.css']
})
export class ProductFillteredComponent implements OnInit {
  categories$;

  @Input('category') category;
  constructor( private catSer:CategoriesService ) {
    this.categories$ = this.catSer.getcategories();
   }

  ngOnInit(): void {
  }

}
