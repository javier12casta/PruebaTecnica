import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Modules/utils/user';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): any {
    return throwError(error);
  }

  listUsersService(): Observable<any> {
    return this.http.get<any>(`${API}users`)
    .pipe(
      catchError(this.handleError)
    );
  }

  searchUserByIdService(id: number): Observable<any> {
    return this.http.get<any>(`${API}users/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  listPostsService(): Observable<any> {
    return this.http.get<any>(`${API}posts`)
    .pipe(
      catchError(this.handleError)
    );
  }

  commentsUserService(id: number): Observable<any> {
    return this.http.get<any>(`${API}posts/${id}/comments`)
    .pipe(
      catchError(this.handleError)
    );
  }

  listPhotosService(): Observable<any> {
    return this.http.get<any>(`${API}photos`)
    .pipe(
      catchError(this.handleError)
    );
  }

  photosByIdService(id: number): Observable<any> {
    return this.http.get<any>(`${API}photos/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }


}
