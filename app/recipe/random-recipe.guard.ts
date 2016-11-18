import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot}   from '@angular/router';

@Injectable()
export class RandomRecipeGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(!route.params['id']){
            return this._router.navigate(['recipe', Math.floor(Math.random() * 8 + 1) ]);
        }
        return true;
    }
    
}