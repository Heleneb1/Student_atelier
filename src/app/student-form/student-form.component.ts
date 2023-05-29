import { Component } from '@angular/core';
// import { Student } from '../models/Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  // studentName: Student[] = [];
  studentName: string = '';

  constructor(private router: Router) {}
  onSubmit(): void {
    this.router.navigate(['/student', this.studentName]);
  }
}
