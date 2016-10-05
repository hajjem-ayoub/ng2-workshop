import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipeModule }   from './recipe/recipe.module';
import { AppComponent }   from './app.component';
import { HomeComponent }     from './home.component';
import { routing }              from './app.routing';

@NgModule({
  imports:      [ RouterModule, RecipeModule, routing ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
