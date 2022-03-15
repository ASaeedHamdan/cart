import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AdminManageUserComponent } from './Admin/admin-manage-user/admin-manage-user.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './Admin/product-form/product-form.component';


const routes: Routes = [
  { path: '' , component :ProductsComponent },
  { path:'login' , component :LogInComponent},
  { path:'orders' , component :MyOrdersComponent , canActivate:[AuthGaurd]},
  { path:'products' , component :ProductsComponent },
  { path:'check-out' , component :CheckOutComponent , canActivate:[AuthGaurd]},
  { path:'shopping-cart' , component :ShoppingCartComponent},
  { path:'order-success' , component :OrderSuccessComponent , canActivate:[AuthGaurd]},
  { path:'admin/orders' , component :AdminOrdersComponent , canActivate:[AuthGaurd , AdminAuthGuardService]},
  { path:'admin/products' , component :AdminProductsComponent , canActivate:[AuthGaurd,AdminAuthGuardService]},
  { path:'admin/products/:id' , component :ProductFormComponent , canActivate:[AuthGaurd,AdminAuthGuardService]},

  { path:'admin/products/new' , component :ProductFormComponent , canActivate:[AuthGaurd,AdminAuthGuardService]},
  { path:'admin/users' , component :AdminManageUserComponent , canActivate:[AuthGaurd,AdminAuthGuardService]},
  { path : '**' ,component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
