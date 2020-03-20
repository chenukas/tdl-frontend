import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }

  public createTask(name, description) {
    return this.http.post(`${environment.apiHost}/tasks`, {name, description});
  }

  public viewTasks() {
    return this.http.get(`${environment.apiHost}/tasks`);
  }
}
