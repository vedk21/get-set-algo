import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'bubble_sort', pathMatch: 'full'
  },
  {
    path: 'bubble_sort', component: BubbleSortComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule { }
