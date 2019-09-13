import { Component } from '@angular/core';
import 'hammerjs';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor() {}

  selectedIndex: number;
  courseName: string = '';
  description: string = '';
  dueDate: any;

  items: Todo[] = [];

  addTask(): void {
    if (this.courseName && this.description && this.dueDate) {
      this.items.push(
        new Todo(this.courseName, this.description, this.dueDate)
      );

      this.description = '';
      this.courseName = '';
      this.dueDate = '';
    }
  }

  onComplete(index: number): void {
    this.deleteEntry(index);
  }

  public deleteEntry(index: number): void {
    console.log(this.items.length);
    this.items.splice(index, 1);
  }

  enableButton(index: number): void {}
}
