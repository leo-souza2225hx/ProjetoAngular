import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mario',
    loadComponent: () => import('./mario/mario.page').then( m => m.MarioPage)
  },
  {
    path: 'princesa-peach',
    loadComponent: () => import('./princesa-peach/princesa-peach.page').then( m => m.PrincesaPeachPage)
  },
  {
    path: 'luigi',
    loadComponent: () => import('./luigi/luigi.page').then( m => m.LuigiPage)
  },
  {
    path: 'yoshi',
    loadComponent: () => import('./yoshi/yoshi.page').then( m => m.YoshiPage)
  },
  {
    path: 'bowser',
    loadComponent: () => import('./bowser/bowser.page').then( m => m.BowserPage)
  },
  {
    path: 'toad',
    loadComponent: () => import('./toad/toad.page').then( m => m.ToadPage)
  },
  {
    path: 'wario',
    loadComponent: () => import('./wario/wario.page').then( m => m.WarioPage)
  },
  {
    path: 'waluigi',
    loadComponent: () => import('./waluigi/waluigi.page').then( m => m.WaluigiPage)
  },
  {
    path: 'princesa-daisy',
    loadComponent: () => import('./princesa-daisy/princesa-daisy.page').then( m => m.PrincesaDaisyPage)
  },
  {
    path: 'rosalina',
    loadComponent: () => import('./rosalina/rosalina.page').then( m => m.RosalinaPage)
  },
  {
    path: 'donkey-kong',
    loadComponent: () => import('./donkey-kong/donkey-kong.page').then( m => m.DonkeyKongPage)
  },
  {
    path: 'diddy-kong',
    loadComponent: () => import('./diddy-kong/diddy-kong.page').then( m => m.DiddyKongPage)
  },
  {
    path: 'lakitu',
    loadComponent: () => import('./lakitu/lakitu.page').then( m => m.LakituPage)
  },
  {
    path: 'shyguy',
    loadComponent: () => import('./shyguy/shyguy.page').then( m => m.ShyguyPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
];
