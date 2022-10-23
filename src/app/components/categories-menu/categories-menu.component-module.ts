import { NgModule } from '@angular/core';
import { CategoriesMenuComponent } from './categories-menu.component';
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    NgForOf,
    AsyncPipe
  ],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
