import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeModel } from '../../models/joke.model';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent {
  readonly joke$: Observable<JokeModel> = this._jokeService.get();

  constructor(private _jokeService: JokeService) {
  }
}
