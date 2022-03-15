import { ShopingCartService } from './services/shoping-cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule  } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProductsComponent } from './Components/products/products.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { AdminManageUserComponent } from './Admin/admin-manage-user/admin-manage-user.component';
import { AuthService } from './services/auth.service';
import { AuthGaurd } from './services/auth-gaurd.service';
import { UserService } from './services/user.service';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataTablesModule } from "angular-datatables";
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductFillteredComponent } from './Components/products/product-filltered/product-filltered.component';
FormsModule



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    LogInComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminManageUserComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductFillteredComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    DataTablesModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCtz4mQY5eWQ5pE5KyrIujn9MUQfzpXO9o",
      authDomain: "shopping-cart-80fd2.firebaseapp.com",
      databaseURL: "https://shopping-cart-80fd2-default-rtdb.firebaseio.com",
      projectId: "shopping-cart-80fd2",
      storageBucket: "shopping-cart-80fd2.appspot.com",
      messagingSenderId: "656428436806",
      appId: "1:656428436806:web:201fce23cdda44096a6947",
      measurementId: "G-N1ZTJ8CM8L"
      // apiKey: "AIzaSyCtz4mQY5eWQ5pE5KyrIujn9MUQfzpXO9o",
      // authDomain: "shopping-cart-80fd2.firebaseapp.com",
      // projectId: "shopping-cart-80fd2",
      // storageBucket: "shopping-cart-80fd2.appspot.com",
      // messagingSenderId: "656428436806",
      // appId: "1:656428436806:web:201fce23cdda44096a6947",
      // measurementId: "${config.measurementId}"
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService ,
    AuthGaurd ,
    UserService,
    CategoriesService,
    ProductsService,
    ShopingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
