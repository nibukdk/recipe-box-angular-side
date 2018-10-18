import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';



import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  name: String;
  description: String;
  ingredients: String;
  image: String;
  constructor(
    private recipeServie: RecipeService,
    private router: Router,
    private flash:NgFlashMessageService) { }

  ngOnInit() {
  }
 
  onAddRecipe(name, image, ingredients, description) {

    this.recipeServie.addNewRecipe(name, image, ingredients, description).subscribe((data) => {
      
      this.router.navigate(['/home']);
      this.flash.showFlashMessage({
        
        messages: ["Congrats! new recipe was created"], 
        
        dismissible: true, 
       
        timeout: 3000,
        type: 'success'
      });
      
    });
    
  }


}
