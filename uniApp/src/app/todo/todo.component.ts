import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.model';
import 'hammerjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input()
  input: Todo;

  @Output()
  completed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  deleteEntry(): void {
    this.completed.emit();
  }
}
