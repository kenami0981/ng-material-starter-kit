import { NgModule } from '@angular/core';
import { PublicHolidaysComponent } from './public-holidays.component';
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    AsyncPipe,
    NgForOf,
  ],
  declarations: [PublicHolidaysComponent],
  providers: [],
  exports: [PublicHolidaysComponent]
})
export class PublicHolidaysComponentModule {
}
