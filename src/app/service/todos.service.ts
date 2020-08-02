import { Injectable } from '@angular/core';
import { Todos } from './../models/Todos';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private REST_API_TODOS: string = 'http://jsonplaceholder.typicode.com/todos';
  private todosLimit: string = '?_limit=6';

  constructor(private httpClient: HttpClient) {}

  // handle error, now that we have several services we should handle errors globaly

  // Get Todos List
  public sendGetRequest(): Observable<Todos[]> {
    return this.httpClient.get<Todos[]>(
      `${this.REST_API_TODOS}${this.todosLimit}`
    );
  }
  // Toggle completed todos
  public sendPutRequest(todo: Todos): Observable<any> {
    const idUrl = `${this.REST_API_TODOS}/${todo.id}`;
    return this.httpClient.put<any>(idUrl, todo, httpOptions);
  }
  // Delete Todos
  public sendDelRequest(todo: Todos): Observable<Todos> {
    const idUrl = `${this.REST_API_TODOS}/${todo.id}`;
    return this.httpClient.delete<any>(idUrl, httpOptions);
  }
}
