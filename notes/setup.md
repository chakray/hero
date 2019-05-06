# setup

__cli__

```
  npm i @chakray/hero --save
```

// __app.module.ts__

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

// __app.component.html__

```
  <ch-hero [data]='data'></ch-hero>
```
