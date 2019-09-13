import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExamsPage } from './exams.page';
import { Exam } from '../exam-item/exam-item.model';
import { ExamItemComponent } from '../exam-item/exam-item.component';

const routes: Routes = [
  {
    path: '',
    component: ExamsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExamsPage, ExamItemComponent]
})
export class ExamsPageModule {}
