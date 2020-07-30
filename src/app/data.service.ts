import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  // example of api (change year and page query)
  // private UEFA_API_SERVER = 'https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2011&page=3';

  constructor(private httpClient: HttpClient) {}

  // if we have several services we should handle errors globaly
  // by using HttpClient interceptors
  handleError(error: HttpErrorResponse) {
    let errorMsg = 'unknown error!';

    if (error.error instanceof ErrorEvent) {
      // client side errors
      return (errorMsg = `Error: ${error.error.message}`);
    } else {
      // server side errors
      return (errorMsg = `Error Code: ${error.status}\nError message: ${error.message}`);
    }
  }
  public sendGetRequest() {
    return this.httpClient
      .get(this.REST_API_SERVER)
      .pipe(retry(3), catchError(this.handleError));
  }
}
