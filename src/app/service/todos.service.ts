import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private REST_API_TODOS = 'http://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}

  // handle error,
  // now that we have several services we should handle them globaly

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_TODOS);
  }
}
