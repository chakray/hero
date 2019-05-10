import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppSampleTag } from './sample.tag';
import { ChHeroMod, ChMarkedTabTag, heroConfig } from '@chakray/hero';
import { AppTag } from './app.tag';

import { SetupData } from './data';

const heroCfg = {
  mod: 'chakray/hero',
  synopsis: 'quick setup for github-pages lander',
  tabs: [{ link: 'setup', text: 'Setup' },
         { link: 'demo', text: 'Demo' }]
};
const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'setup'
}, {
  path: 'setup',
  resolve: {
    loader: SetupData
  },
  component: ChMarkedTabTag
}, {
  path: 'demo',
  component: AppSampleTag
}];

@NgModule({
  declarations: [
    AppTag,
    AppSampleTag,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChHeroMod,
    BrowserModule
  ],
  providers: [
    { provide: heroConfig, useValue: heroCfg }
  ],
  bootstrap: [AppTag]
})
export class AppModule { }
