import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRecipe(recipe){
    if(recipe.name=== undefined ||recipe.description=== undefined ||recipe.image=== undefined ||recipe.ingredients=== undefined ){
      return false;
    }
    else{
      return true;
    }
  }
}
