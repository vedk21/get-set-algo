import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';


const routes: Routes = [
  {
    path: 'bubble_sort', component: BubbleSortComponent
  },
  {
    path: 'selection_sort', component: SelectionSortComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmTechniquesRoutingModule { }
