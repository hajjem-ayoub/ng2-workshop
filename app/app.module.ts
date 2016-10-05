import { NgModule }      from '@angular/core';
import { RecipeModule }   from './recipe/recipe.module';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ RecipeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
