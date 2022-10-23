import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipsComponent } from './crypto-chips.component';
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, AsyncPipe, NgForOf],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
