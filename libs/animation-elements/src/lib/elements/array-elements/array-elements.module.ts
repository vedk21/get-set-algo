import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayBoxComponent } from './array-box/array-box.component';
import { ArrayComponent } from './array/array.component';

const components = [
  ArrayBoxComponent,
  ArrayComponent
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
export class ArrayElementsModule { }
