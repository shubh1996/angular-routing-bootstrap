import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LocComponent } from './loc/loc.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  { path: '', redirectTo: 'loc', pathMatch: 'full' },
  {
    path: 'loc',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: LandingComponent,
      },
      {
        path: 'filters',
        component: LocComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingRoutingModule {}
