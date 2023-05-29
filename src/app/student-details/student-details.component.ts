import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  studentDetails: Student | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const stuName: string | null =
      this.activatedRoute.snapshot.paramMap.get('studentDetails');

    if (stuName) {
      this.http.get<Student[]>('assets/students.json').subscribe((student) => {
        this.studentDetails = student.find(
          (student) => student.studentName === stuName
        );

        if (!this.studentDetails?.studentName) {
          // this.router.navigate(['/student']);
          alert("Ce n'est pas un élève de la WCS");
        }
      });
    }
  }
}
