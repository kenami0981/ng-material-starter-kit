import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NameService } from '../../services/name.service';
import {NameModel} from "../../models/name.model";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent {
  readonly name$: Observable<NameModel> = this._activatedRoute.params.pipe(switchMap(data => this._nameService.get(data['name'])));

  constructor(private _nameService: NameService, private _activatedRoute: ActivatedRoute) {
  }
}
