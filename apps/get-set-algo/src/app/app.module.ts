import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonAppModule } from './common/common.module';

const sharedModules = [
  CommonAppModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...sharedModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
