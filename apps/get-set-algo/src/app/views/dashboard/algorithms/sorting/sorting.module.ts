import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SortingRoutingModule } from './sorting-routing.module';
import { SortingComponent } from './sorting.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';

const sortingComponents = [
  BubbleSortComponent
];

const thirdPartyModules = [
  FlexLayoutModule
];

@NgModule({
  declarations: [
    SortingComponent,
    ...sortingComponents
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
    ...thirdPartyModules
  ]
})
export class SortingModule { }
