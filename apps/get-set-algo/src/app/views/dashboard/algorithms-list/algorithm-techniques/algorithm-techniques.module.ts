import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlgorithmTechniquesRoutingModule } from './algorithm-techniques-routing.module';
import { AlgorithmTechniquesComponent } from './algorithm-techniques.component';
import { AlgorithmContentComponent } from './algorithm-content/algorithm-content.component';
import { AnimationElementsModule } from '@get-set-algo/animation-elements';
import { BubbleSortService } from '../../../../services/algorithm/bubble-sort.service';
import { HighlightService, SwappingService } from '@get-set-algo/animate';
import { SelectionSortService } from '../../../../services/algorithm/selection-sort.service';
import { PlainStrings } from '@get-set-algo/main-app/pipes/plain-strings.pipe';

const sortingComponents = [
  AlgorithmContentComponent
];

const thirdPartyModules = [
  FlexLayoutModule
];

const animationServices = [
  HighlightService,
  SwappingService
];

const pipes = [
  PlainStrings
];

@NgModule({
  declarations: [
    AlgorithmTechniquesComponent,
    ...sortingComponents,
    ...pipes
  ],
  imports: [
    CommonModule,
    AlgorithmTechniquesRoutingModule,
    ...thirdPartyModules,
    AnimationElementsModule
  ],
  providers: [
    BubbleSortService,
    SelectionSortService,
    ...animationServices
  ]
})
export class AlgorithmTechniquesModule { }
