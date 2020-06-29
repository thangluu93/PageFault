import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'homePage', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }, { path: 'lru', loadChildren: () => import('./lru/lru.module').then(m => m.LruModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
