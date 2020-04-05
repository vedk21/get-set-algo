import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlgorithmTechniquesComponent } from './algorithm-techniques/algorithm-techniques.component';

const routes = [
  {
    path: 'algorithm-techniques/:type', component: AlgorithmTechniquesComponent, loadChildren: () => import('./algorithm-techniques/algorithm-techniques.module').then(m => m.AlgorithmTechniquesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsListRoutingModule { }
