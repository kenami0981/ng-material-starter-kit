import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { JokeComponent } from './joke.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [

    MatButtonToggleModule,
    NgIf,
    AsyncPipe
  ],
  declarations: [JokeComponent],
  providers: [],
  exports: [JokeComponent]
})
export class JokeComponentModule {
}
