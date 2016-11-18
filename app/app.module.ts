import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipeModule } from './recipe/recipe.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { RandomRecipeGuard } from './recipe/random-recipe.guard';

@NgModule({
  imports: [RouterModule, RecipeModule, routing],
  declarations: [AppComponent, HomeComponent],
  providers: [RandomRecipeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
