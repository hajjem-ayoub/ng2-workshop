import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeeklyMenuComponent }   from './weekly-menu.component';

@NgModule({
    imports: [BrowserModule],
    exports: [WeeklyMenuComponent],
    declarations: [WeeklyMenuComponent],
    providers: [],
})
export class RecipeModule { }
