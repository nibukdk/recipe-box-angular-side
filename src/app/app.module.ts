import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ValidateService } from './services/validate.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { RecipeService } from './services/recipe.service';
import {  HttpClientModule } from '@angular/common/http';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const appRoutes:Routes =[
  {path:'home', component:ListRecipeComponent},
  {path:'home/:id/details',component:RecipeDetailComponent},
  {path:'home/:id/details/update', component:EditRecipeComponent},
  {path:'home/new', component:CreateRecipeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    ListRecipeComponent,
    RecipeDetailComponent
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgFlashMessagesModule.forRoot(),
    
  ],
  providers: [ValidateService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
