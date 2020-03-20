import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { MatSnackBar } from '@angular/material';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private name: String;
  private description: String;
  private tasks:[];

  constructor(
    private tasksService: TasksService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.name = '';
    this.description = '';
    this.tasksService.viewTasks().subscribe((response : APIResponse) => {
      this.tasks = response.data;
    });
  }

  createTask() {
    console.log(this.name,this.description);
    this.tasksService.createTask(this.name, this.description).subscribe(response => {
      console.log(response);
      this.clear();
      this.snackBar.open('New task is succesfully created', null, { duration : 2000});
    }, err => {
      this.snackBar.open(err.message, null, { duration : 3000});
    });
  }

  clear() {
    this.name = '';
    this.description = '';
  }
}
