import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeService } from './recipe.service';
import { WeeklyMenuComponent }   from './weekly-menu.component';

@NgModule({
    imports: [BrowserModule],
    exports: [WeeklyMenuComponent],
    declarations: [WeeklyMenuComponent],
    providers: [RecipeService],
})
export class RecipeModule { }
