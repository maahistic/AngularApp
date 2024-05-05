import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-line',
  templateUrl: './user-list.component.html',
  styles:
  [    '.custom{color:red}'],
  
  styleUrls: [
    './user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
