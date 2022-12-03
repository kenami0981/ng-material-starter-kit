import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
    imports: [
        AsyncPipe
    ],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsComponentModule {
}
