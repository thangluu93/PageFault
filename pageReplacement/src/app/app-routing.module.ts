import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'fifo', loadChildren: () => import('./fifo/fifo.module').then(m => m.FifoModule) },
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'lru', loadChildren: () => import('./lru/lru.module').then(m => m.LruModule) },
  { path: 'clock', loadChildren: () => import('./clock/clock.module').then(m => m.ClockModule) },
  { path: 'optimal', loadChildren: () => import('./optimal/optimal.module').then(m => m.OptimalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
