import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [CommonModule, MatCardModule],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
