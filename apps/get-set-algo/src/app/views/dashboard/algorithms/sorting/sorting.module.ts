import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SortingRoutingModule } from './sorting-routing.module';
import { SortingComponent } from './sorting.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { AnimationElementsModule } from '@get-set-algo/animation-elements';
import { BubbleSortService } from './bubble-sort/bubble-sort.service';
import { HighlightService, SwappingService } from '@get-set-algo/animate';

const sortingComponents = [
  BubbleSortComponent
];

const thirdPartyModules = [
  FlexLayoutModule
];

const animationServices = [
  HighlightService,
  SwappingService
];

@NgModule({
  declarations: [
    SortingComponent,
    ...sortingComponents
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
    ...thirdPartyModules,
    AnimationElementsModule
  ],
  providers: [
    BubbleSortService,
    ...animationServices
  ]
})
export class SortingModule { }
