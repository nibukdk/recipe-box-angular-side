import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
   uri="http://localhost:8080";

  constructor(private http:HttpClient) { }
  getRecipes() {
    return this.http.get(`${this.uri}/home`);
  }
  getRecipeById(id) {
    return this.http.get(`${this.uri}/home/${id}/details`);
  }

  addNewRecipe(name,image, ingredients, description) {
    const recipe = {
      name: name,
      ingredients: ingredients,
      description: description,
      image: image
    };
    return this.http.post(`${this.uri}/home/new`, recipe);
  }

  updateRecipe(id, name,image, ingredients, description) {
    const updatedRecipe = {
      name: name,
      ingredients: ingredients,
      description: description,
      image: image
      
    };
    return this.http.put(`${this.uri}/home/${id}/details`, updatedRecipe);
  }

  deleteRecipe(id) {
    return this.http.delete(`${this.uri}/home/${id}/details`);
  }
  
}
