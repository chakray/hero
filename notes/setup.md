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
  +  { "glob": "**/*", "input": "./projects/chakray/hero/src/assets", "output": "assets/hero" }
  ],
```

__style.sass__

```
@import '~@chakray/hero/theme/base'
```

__app.module.ts__

```
import { ChHeroMod } from '@chakray/hero';

@NgModule({
  ...
  imports: [
    ChHeroMod, ...
  ]
})
export class ...
```

__app.component.html__

```
  <ch-hero [data]='data'></ch-hero>
```
