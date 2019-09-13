import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TodoComponent } from '../todo/todo.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@NgModule({
  declarations: [HomePage, TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [TodoComponent]
})
export class HomePageModule {}
