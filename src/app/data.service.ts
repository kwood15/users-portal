import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {

  }

  getUser(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
