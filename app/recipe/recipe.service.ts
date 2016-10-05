import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

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

    getRecipes(): Promise<IRecipe[]> {
        return this._http.get('/Artifacts/data/recipies.json')
                    .toPromise().then(r => r.json() as IRecipe[]);
    }
}