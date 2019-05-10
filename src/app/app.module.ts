import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppSampleTag } from './sample.tag';
import { ChHeroMod } from '@chakray/hero';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'setup'
}, {
  path: 'setup',
  component: AppSampleTag
}, {
  path: 'demo',
  component: AppSampleTag
}];

@NgModule({
  declarations: [
    AppComponent,
    AppSampleTag,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChHeroMod,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
