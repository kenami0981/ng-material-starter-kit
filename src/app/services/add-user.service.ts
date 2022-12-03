import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddUserModel } from '../models/add-user.model';
import {EmployeeModel} from "../models/employee.model";

@Injectable()
export class AddUserService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: AddUserModel): Observable<AddUserModel> {
    return this._httpClient.post<AddUserModel>('https://fakestoreapi.com/users', user)
  }
}
