import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersTableModule } from '../../alumnos/components/users-table/users-table.module';

@NgModule({
  declarations: [
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UsersTableModule
  ],
  exports: [TeacherComponent]
})
export class TeacherModule { }
