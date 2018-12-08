import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CasinoComponent } from './views/casino/casino.component';
import { GameComponent } from './views/game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
    // loadChildren: './views/login/login.module#LoginModule'
  },
  {
    path: 'casino',
    component: CasinoComponent
    // loadChildren: './views/casino/casino.module#CasinoModule'
  },
  {
    path: 'game',
    component: GameComponent
    // loadChildren: './views/game/game.module#GameModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
