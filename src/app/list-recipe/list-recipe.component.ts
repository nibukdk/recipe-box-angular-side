import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {Recipe} from '../recipe.model';
import {Router} from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes: Recipe[];
  //display=['title', 'image', 'description', 'ingredients' ];

  constructor(
    private recipeServie: RecipeService,
     private router:Router,
    private flash:NgFlashMessageService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(){
       this.recipeServie
       .getRecipes().subscribe((data:Recipe[])=> {
          this.recipes = data;
                  
          
    });
  }

  updateRecipe(id){
    this.router.navigate([`/home/${id}/details/update`]);
  }
 deleteRecipe(id){
    this.recipeServie.deleteRecipe(id).subscribe(()=>{
          this.getRecipes();
          this.flash.showFlashMessage({
        
            messages: ["Item was deleted"], 
            
            dismissible: true, 
           
            timeout: 3000,
            type: 'success'
          });
    });
  }
}
