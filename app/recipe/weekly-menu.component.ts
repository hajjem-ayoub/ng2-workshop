import { Component, OnInit } from '@angular/core';
import { IRecipe, RecipeService } from './recipe.service';

@Component({
    moduleId: module.id,
    selector: 'weekly-menu',
    templateUrl: 'weekly-menu.component.html'
})
export class WeeklyMenuComponent implements OnInit {
    title = "Weekly Menu";
    recipes: IRecipe[];

    private daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    constructor(private _svc: RecipeService) { }

    ngOnInit() { 
        this._svc.getRecipes().then(recipes => 
                this.recipes = recipes.map((r, i) => {
                    r.dayOfWeek = this.daysOfWeek[i % this.daysOfWeek.length];
                    return r;
                }));
    }

}