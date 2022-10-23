import { NgModule } from '@angular/core';
import { CheckboxCategoriesComponent } from './checkbox-categories.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe
  ],
  declarations: [CheckboxCategoriesComponent],
  providers: [],
  exports: [CheckboxCategoriesComponent]
})
export class CheckboxCategoriesComponentModule {
}
