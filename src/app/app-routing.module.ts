import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [

  {path : "login", component : LoginComponent},
  {path : "signup", component : SignupComponent},
  {path : "products", component : ProductListComponent},
  {path : "products/:id", component : ProductDetailsComponent},
  {path : "cart", component : CartComponent},
  {path : "orders", component : OrdersComponent},
  {path : "admin", component : AdminComponent},
  {path : "admin-login", component : AdminLoginComponent},
  {path : "logout" , component : LogoutComponent },
  {path : "manage-products", component : AdminProductsComponent},
  {path : "" , component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
