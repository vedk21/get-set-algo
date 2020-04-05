import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlgorithmsComponent } from './algorithms.component';
import { AlgorithmsRoutingModule } from './algorithms-routing.module';



@NgModule({
  declarations: [AlgorithmsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
