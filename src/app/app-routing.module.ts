import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatComponent } from './components/cat/cat.component';
import { NameComponent } from './components/name/name.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { UserServiceModule } from './services/user.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatComponentModule } from './components/cat/cat.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { NameComponentModule } from './components/name/name.component-module';
import { NameServiceModule } from './services/name.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsListComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'public-holidays', component: PublicHolidaysComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'products-form', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LoginComponent }, { path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatComponent }, { path: 'age/:name', component: NameComponent }, { path: 'cart/:id', component: CartComponent }]), ProductsListComponentModule, ProductServiceModule, CategoriesComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CheckboxCategoriesComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, UserServiceModule, ProductDetailComponentModule, CatComponentModule, CatServiceModule, NameComponentModule, NameServiceModule, CartComponentModule, CartServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
