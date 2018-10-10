import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  getUser(userId) {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
}
