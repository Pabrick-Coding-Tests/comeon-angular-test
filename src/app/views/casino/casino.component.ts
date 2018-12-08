import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.less']
})
export class CasinoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    console.log('logout');
  }

  searchGamesByName() {
    console.log('searchGamesByName');
  }

}
