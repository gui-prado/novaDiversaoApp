import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'fronzen2',
    loadChildren: () => import('./filmes/fronzen2/fronzen2.module').then( m => m.Fronzen2PageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'got',
    loadChildren: () => import('./series/got/got.module').then( m => m.GotPageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  },
  {
    path: 'dragon-ball',
    loadChildren: () => import('./desenhos/dragon-ball/dragon-ball.module').then( m => m.DragonBallPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
