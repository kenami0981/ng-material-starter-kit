import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoriesComponent } from './categories.component';
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgForOf, AsyncPipe],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
