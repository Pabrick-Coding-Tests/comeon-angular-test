import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.less']
})
export class CasinoComponent implements OnInit {

  constructor(public service: AppService, private router: Router) { }

  ngOnInit() {
    if (this.service.player.user === '') {
      this.router.navigate(['login']);
    }
  }

  logout() {
    console.log('logout');
  }

  searchGamesByName() {
    console.log('searchGamesByName');
  }

}
