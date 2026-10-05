import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Md5} from 'ts-md5';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login(info: { login: string, password: string }): Observable<any> {

    info.password = Md5.hashStr(info.password) as string;

    return this._http.post<any>("/api/auth/", info)
            .pipe(
              map(res =>
              {
                if (res && res.token)
                  localStorage.setItem("token", res.token);
                return res;
              }),
              catchError(error => {
                return throwError(() => error);
              }
              )
            );
  }

  public sendTestRequest(){
    this._http.get("/weatherforecast/summaries").subscribe(res => alert(res));
  }
}
