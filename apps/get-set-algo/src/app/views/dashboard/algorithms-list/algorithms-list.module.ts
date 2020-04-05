import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlgorithmsListComponent } from './algorithms-list.component';
import { AlgorithmsListRoutingModule } from './algorithms-list-routing.module';



@NgModule({
  declarations: [AlgorithmsListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AlgorithmsListRoutingModule
  ]
})
export class AlgorithmsListModule { }
