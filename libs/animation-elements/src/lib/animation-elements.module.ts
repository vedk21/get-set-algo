import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayElementsModule } from './elements/array-elements/array-elements.module';

@NgModule({
  imports: [
    CommonModule,
    ArrayElementsModule
  ],
  exports: [
    ArrayElementsModule
  ]
})
export class AnimationElementsModule {}
