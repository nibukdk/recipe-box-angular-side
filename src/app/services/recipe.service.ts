import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
   uri="http://localhost:8080";

  constructor(private http:HttpClient) { }
  getRecipes() {
    return this.http.get(`${this.uri}`);
   //return this.http.get('/home');
  }
  getRecipeById(id) {
    return this.http.get(`${this.uri}/home/${id}/details/update`);
    //return this.http.get(`/home/${id}/details/update`);
  }

  addNewRecipe(name,image, ingredients, description) {
    const recipe = {
      name: name,
      ingredients: ingredients,
      description: description,
      image: image
    };
    return this.http.post(`${this.uri}/home/new`, recipe);
    //return this.http.post(`/home/new`, recipe);
  }

  updateRecipe(id, name,image, ingredients, description) {
    const updatedRecipe = {
      name: name,
      ingredients: ingredients,
      description: description,
      image: image
      
    };
    return this.http.put(`${this.uri}/home/${id}/details/update`, updatedRecipe);
    //return this.http.put(`/home/${id}/details/update`, updatedRecipe);
  }

  deleteRecipe(id) {
    return this.http.delete(`${this.uri}/home/${id}/details`);
    //return this.http.delete(`/home/${id}/details`);
  }
  
}
