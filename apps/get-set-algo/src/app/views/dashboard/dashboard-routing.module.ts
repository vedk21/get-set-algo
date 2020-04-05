import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlgorithmsListComponent } from './algorithms-list/algorithms-list.component';
import { NoContentComponent } from '@get-set-algo/main-app/common/components/no-content/no-content.component';

const routes = [
  {
    path: '', redirectTo: 'algorithms-list', pathMatch: 'full'
  },
  {
    path: 'algorithms-list', component: AlgorithmsListComponent, loadChildren: () => import('./algorithms-list/algorithms-list.module').then(m => m.AlgorithmsListModule)
  },
  {
    path: 'no-content', component: NoContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
