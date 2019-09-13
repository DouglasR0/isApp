import { Component, OnInit } from '@angular/core';
import { Exam } from '../exam-item/exam-item.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss']
})
export class ExamsPage implements OnInit {
  constructor() {}
  course: string = '';
  date: string = '';
  items: Exam[] = [];
  activeButton: boolean = true;

  addExam() {
    if (this.course && this.date) {
      this.items.push(new Exam(this.course, this.date));
      this.course = '';
      this.date = '';
      this.deactivate();
    }
  }
  deleteEntry(i: number) {
    this.items.splice(i, 1);
  }
  deactivate() {
    this.activeButton = !this.activeButton;
  }
  ngOnInit() {}
}
