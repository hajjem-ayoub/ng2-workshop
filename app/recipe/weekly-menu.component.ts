import { Component, OnInit } from '@angular/core';
import { IRecipe, RecipeService } from './recipe.service';
import { Observable }   from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'weekly-menu',
    templateUrl: 'weekly-menu.component.html'
})
export class WeeklyMenuComponent implements OnInit {
    title = "Weekly Menu";
    recipes: Observable<IRecipe[]>;

    private daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    constructor(private _svc: RecipeService) { }

    ngOnInit() { 
        this.recipes = this._svc.getRecipes();
    }

}