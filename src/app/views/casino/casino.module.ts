import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoComponent } from './casino.component';
import { PlayerComponent } from 'src/app/components/player/player.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { GameCardComponent } from 'src/app/components/game-card/game-card.component';

@NgModule({
  declarations: [
    CasinoComponent,
    PlayerComponent,
    CategoryComponent,
    GameCardComponent
  ],
  imports: [ CommonModule ],
  exports: [ CasinoComponent ]
})
export class CasinoModule { }
