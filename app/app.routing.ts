import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }     from './home.component';
import { WeeklyMenuComponent }   from './recipe/weekly-menu.component';
import { RecipeDetailsComponent }   from './recipe/recipe-details.component';
import { RandomRecipeGuard } from './recipe/random-recipe.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      nav: true
    },
    
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'weekly-menu',
    component: WeeklyMenuComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'random-recipe',
    component: RecipeDetailsComponent, 
    canActivate: [RandomRecipeGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
