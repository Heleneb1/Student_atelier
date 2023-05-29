import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(public http: HttpClient) {}
  getStudents(): Observable<Student[]> {
    // return this.http.get<Student[]>(this.StudentsUrl);
    return this.http.get<Student[]>('assets/students.json');
  }
}
