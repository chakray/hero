import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppSampleTag } from './sample.tag';
import { ChHeroMod, ChMarkedTabTag, HeroConfig } from '@chakray/hero';
import { AppComponent } from './app.component';

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
    AppComponent,
    AppSampleTag,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChHeroMod,
    BrowserModule
  ],
  providers: [
    { provide: HeroConfig, useValue: new HeroConfig(heroCfg) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
