import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NameModel } from '../models/name.model';

@Injectable()
export class NameService {
  constructor(private _httpClient: HttpClient) {
  }

  get(name:string): Observable<NameModel> {
    return this._httpClient.get<NameModel>('https://api.agify.io/?name='+name);
  }
}
