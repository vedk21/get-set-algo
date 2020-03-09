import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortingRoutingModule } from './sorting-routing.module';
import { SortingComponent } from './sorting.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';

const sortingComponents = [
  BubbleSortComponent
];

@NgModule({
  declarations: [
    SortingComponent,
    ...sortingComponents
  ],
  imports: [
    CommonModule,
    SortingRoutingModule
  ]
})
export class SortingModule { }
