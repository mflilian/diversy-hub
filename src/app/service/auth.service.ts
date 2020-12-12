import { environment } from './../../environments/environment';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: RouterModule
  ) { }

  signIn(email: string, password: string): Observable<any> {
    const url = '/api/candidates/login';
    return this.http.post<any>(url, {email, password}).pipe(
      map((res: string) => {
        console.log('oie')
        localStorage.setItem('token','Bearer'+ res);
        return res;
      }),
      catchError(err => {
        return throwError(err)
      })
    )
  }
}
