import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { RecipeService } from './recipe.service';
import { ImagePipeTransform } from './image.pipe';
import { WeeklyMenuComponent }   from './weekly-menu.component';
import { RecipeDetailsComponent }   from './recipe-details.component';
import 'rxjs/Rx';

@NgModule({
    imports: [BrowserModule, HttpModule],
    exports: [WeeklyMenuComponent],
    declarations: [WeeklyMenuComponent, RecipeDetailsComponent, ImagePipeTransform],
    providers: [RecipeService],
})
export class RecipeModule { }
