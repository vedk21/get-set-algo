import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgorithmsComponent } from './algorithms.component';
import { AlgorithmsRoutingModule } from './algorithms-routing.module';



@NgModule({
  declarations: [AlgorithmsComponent],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
