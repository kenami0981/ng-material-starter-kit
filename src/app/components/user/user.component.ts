import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AddUserService } from '../../services/add-user.service';
import {AddUserModel} from "../../models/add-user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  readonly user$: Observable<AddUserModel> = this._activatedRoute.params.pipe(switchMap(data => this._addUserService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _addUserService: AddUserService) {
  }
}
