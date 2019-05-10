# setup

__cli__

```
  npm i @chakray/hero --save
```

__angular.json__

```diff
  "assets": [
    "src/favicon.ico",
    "src/assets",
+   { "glob": "**/*",
+     "input": "./projects/chakray/hero/src/assets",
+     "output": "assets/hero" }
  ],
```

__style.sass__

```
@import '~@chakray/hero/theme/base'
```

__app.module.ts__

```
import { ChHeroMod } from '@chakray/hero';

const routes: Routes = [{
  path: 'setup',
  resolve: {
    loader: SetupData
  },
  component: ChMarkedTabTag
}];

@NgModule({
  ...
  imports: [
    ChHeroMod, ...
  ],
  providers: [
    { provide: HeroConfig, useValue: new HeroConfig({ mod: 'chakray/hero' }) }
  ],
})
export class ...
```

__app.component.html__

```
  <ch-hero [data]='data'></ch-hero>
```
