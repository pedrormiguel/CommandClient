import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  // variable
  item: any = [];

  ngOnInit() {
    this.get();
  }

  get() {
    this.auth.get('menu').subscribe(
      next => {
        this.item = next;
      },
      error => {
        console.log(error);
      });
  }

}
