import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable }   from 'rxjs/Rx';

export interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    dayOfWeek?: string;
    recipeIngredients?: any[];
    recipeInstructions?: any[];
}

@Injectable()
export class RecipeService {

    constructor(private _http: Http) { }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get('/Artifacts/data/recipies.json').
                    map(r => r.json() as IRecipe[]);
    }
}