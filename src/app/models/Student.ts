export class Student {
  //   constructor(private _id: string, public studentName: string) {}
  constructor(public id: string, public studentName: string) {}
  getId(): string {
    return this.studentName;
  }
}
