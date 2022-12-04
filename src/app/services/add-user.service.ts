import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddUserModel } from '../models/add-user.model';

@Injectable()
export class AddUserService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: AddUserModel): Observable<AddUserModel> {
    return this._httpClient.post<AddUserModel>('https://fakestoreapi.com/users', user)
  }

  getOne(id: string): Observable<AddUserModel> {
    return this._httpClient.get<AddUserModel>('https://fakestoreapi.com/users/'+id);
  }
}
