import { NgModule } from '@angular/core';
import { NameComponent } from './name.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    NgIf,
    AsyncPipe,
    MatCardModule
  ],
  declarations: [NameComponent],
  providers: [],
  exports: [NameComponent]
})
export class NameComponentModule {
}
