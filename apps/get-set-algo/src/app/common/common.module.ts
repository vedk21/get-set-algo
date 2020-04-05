import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoContentComponent } from './components/no-content/no-content.component';

const commonComponents = [
  NoContentComponent
];

@NgModule({
  declarations: [
    ...commonComponents
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ...commonComponents
  ]
})
export class CommonAppModule { }
