import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';


@Component({
  selector: 'app-djl-login',
  templateUrl: './djl-login.component.html',
  styleUrls: ['./djl-login.component.scss']
})
export class DjlLoginComponent implements OnInit {
  private nickname;
  private password;
  constructor(
    private fetchService: FetchService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.fetchService.get('v1/users', {
      username: this.nickname,
      password: this.password
    }, true).subscribe(data => {

    });
  }

}
