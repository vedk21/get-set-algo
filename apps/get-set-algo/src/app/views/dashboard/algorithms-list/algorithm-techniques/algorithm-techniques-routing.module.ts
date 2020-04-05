import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmContentComponent } from './algorithm-content/algorithm-content.component';


const routes: Routes = [
  {
    path: 'algorithm-content/:technique', component: AlgorithmContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmTechniquesRoutingModule { }
