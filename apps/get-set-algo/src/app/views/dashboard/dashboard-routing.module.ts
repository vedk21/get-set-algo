import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

const routes = [
  {
    path: '', redirectTo: 'algorithms', pathMatch: 'full'
  },
  {
    path: 'algorithms', component: AlgorithmsComponent, loadChildren: () => import('./algorithms/algorithms.module').then(m => m.AlgorithmsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
