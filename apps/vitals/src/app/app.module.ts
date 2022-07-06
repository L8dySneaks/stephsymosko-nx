import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiModule } from '@stephsymosko-nx/shared-ui';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
