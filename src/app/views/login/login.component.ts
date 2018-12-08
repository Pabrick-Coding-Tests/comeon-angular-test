import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public user;
  public pass;
  public errorMessage;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.service.login(this.user, this.pass).subscribe(
      (dataSuccess: any) => {
        this.service.setPlayer(dataSuccess.player);
        this.router.navigate(['casino']);
      },
      (dataFailure: any) => {
        this.errorMessage = `${dataFailure.error.error.charAt(0).toUpperCase()}${dataFailure.error.error.slice(1)}! Please try again!`;
      }
      );
  }

  logout() {
    this.service.login(this.user, this.pass).subscribe(
      (data: any) => { console.log(data);
    });
  }

}
