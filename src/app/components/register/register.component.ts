import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddUserService } from '../../services/add-user.service';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  readonly registerUser: FormGroup = new FormGroup({ email: new FormControl(), username: new FormControl(), password: new FormControl(), firstname: new FormControl(), lastname: new FormControl(), city: new FormControl(), street: new FormControl(), number: new FormControl(), zipcode: new FormControl(), phone: new FormControl() });

  constructor(private _addUserService: AddUserService) {
  }

  onRegisterUserSubmitted(registerUser: FormGroup): void {
    this._addUserService.create({ email: registerUser.get('email')?.value, username: registerUser.get('email')?.value, password: registerUser.get('password')?.value, name: {firstname: registerUser.get('firstname')?.value, lastname: registerUser.get('lastname')?.value},address:{ city: registerUser.get('city')?.value, street: registerUser.get('street')?.value, number: registerUser.get('number')?.value, zipcode: registerUser.get('zipcode')?.value}, phone: registerUser.get('phone')?.value }).subscribe();
  }
}
