import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const components = [
  ButtonComponent,
  ProgressBarComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class AnimationControlsModule { }
