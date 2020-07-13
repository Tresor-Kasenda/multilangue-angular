import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':country',
    component: DetailComponent
  },
  { path: 'nav', loadChildren: () => import('./component/nav/nav.module').then(m => m.NavModule) },
  { path: 'carde', loadChildren: () => import('./component/carde/carde.module').then(m => m.CardeModule) },
  {
    path: '**',
    redirectTo: 'home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
