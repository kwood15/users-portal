import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users$: object;

  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }
}
