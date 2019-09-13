import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exam } from './exam-item.model';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss']
})
export class ExamItemComponent implements OnInit {
  constructor() {}
  @Input()
  input: Exam;

  @Output()
  addedExam: EventEmitter<void> = new EventEmitter<void>();

  deleteEntry(): void {
    this.addedExam.emit();
  }

  ngOnInit() {}
}
