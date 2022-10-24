import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly user: FormGroup = new FormGroup({ username: new FormControl(), password: new FormControl() });

  constructor(private _userService: UserService) {
  }

  onUserSubmitted(user: FormGroup): void {
    this._userService.create({username: user.get('username')?.value, password: user.get('password')?.value}).subscribe()
  }
}
