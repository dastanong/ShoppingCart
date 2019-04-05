import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Not-To DO List';

  taskList = {
    "Task 1" : true,
    "Task 2" : false,
    "Task 3" : false,
  }

  getTaskList = Object.keys(this.taskList)

  clickTask(task) {
    this.taskList[task] = !this.taskList[task]
  }

  clearTask() {
    this.getTaskList = []
  }

  addTask() {
    const newTask = Object.keys(this.taskList)
    this.taskList[`Task ${newTask.length + 1}`] = false
    this.getTaskList = Object.keys(this.taskList)
  }

}

