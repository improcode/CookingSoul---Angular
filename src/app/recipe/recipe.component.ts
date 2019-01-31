import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../services/recipes.service';

import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipesService]
})
export class RecipeComponent implements OnInit {
selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.selectedRecipe.subscribe(
      (recipe: Recipe) => {this.selectedRecipe = recipe;}
      )
  }

}
