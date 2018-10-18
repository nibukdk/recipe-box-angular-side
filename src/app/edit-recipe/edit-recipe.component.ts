import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id:String;
  recipe:any;
  name: String;
  description: String;
  ingredients: String;
  image: String;


  constructor(
    private recipeServie: RecipeService,
     private router: Router,
     private activateRoute: ActivatedRoute,
    private flash: NgFlashMessageService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params.id;
      this.recipeServie.getRecipeById(this.id).subscribe(res => {
        this.recipe = res;
        this.name= this.recipe.name;
        this.image= this.recipe.image;
        this.description= this.recipe.description;
        this.ingredients= this.recipe.ingredients;
      
      });


    });
  }

  onUpdateRecipe( id,name,image, ingredients, description) {
    this.recipeServie.updateRecipe(this.id, name,image, ingredients, description).subscribe(() => {
      this.router.navigate(['/home']);
      this.flash.showFlashMessage({
        
        messages: ["Item was edited"], 
        
        dismissible: true, 
       
        timeout: 3000,
        type: 'success'
      });
      
    });
  }

}
