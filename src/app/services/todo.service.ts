import { Injectable } from '@angular/core';
// import { HttpClient , HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(public http:HttpClient) { }

  getTodos() {
    return [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Go to the bank',
      completed: true
    },
    {
      id: 3,
      title: 'Walk the dog',
      completed: false
    }
  ]
  }
}
