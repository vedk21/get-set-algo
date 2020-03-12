import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayElementsModule } from './elements/array-elements/array-elements.module';
import { AnimationControlsModule } from './elements/animation-controls/animation-controls.module';

@NgModule({
  imports: [
    CommonModule,
    ArrayElementsModule,
    AnimationControlsModule
  ],
  exports: [
    ArrayElementsModule,
    AnimationControlsModule
  ]
})
export class AnimationElementsModule {}
