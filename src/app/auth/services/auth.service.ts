import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginModel } from '../models/IAuthLogin.model';
import { Observable } from 'rxjs';
import { ILoginApiResult } from '../models/IAuthLoginApi.model';
import { RegisterModelApiResult } from '../models/IAuthRegisterApi.model';
import { IRegisterModel } from '../models/IAuthRegister.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url: string = 'https://localhost:7082/api/'

  constructor(private _client: HttpClient) { }

  public login(login: ILoginModel): Observable<ILoginApiResult>{
    return this._client.post<ILoginApiResult>(this._url + 'auth/login', login);
  }

  public register(register: IRegisterModel): Observable<RegisterModelApiResult>{
    return this._client.post<RegisterModelApiResult>(this._url + 'auth/register', register); 
  }
}
