import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortingComponent } from './sorting/sorting.component';

const routes = [
  {
    path: 'sorting', component: SortingComponent, loadChildren: () => import('./sorting/sorting.module').then(m => m.SortingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule { }
