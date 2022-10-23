import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsListComponent }, { path: 'categories', component: CategoriesComponent }]), ProductsListComponentModule, ProductServiceModule, CategoriesComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
