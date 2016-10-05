import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeService } from './recipe.service';
import { ImagePipeTransform } from './image.pipe';
import { WeeklyMenuComponent }   from './weekly-menu.component';

@NgModule({
    imports: [BrowserModule],
    exports: [WeeklyMenuComponent],
    declarations: [WeeklyMenuComponent, ImagePipeTransform],
    providers: [RecipeService],
})
export class RecipeModule { }
