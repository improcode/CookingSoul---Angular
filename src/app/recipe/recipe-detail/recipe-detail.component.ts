import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model'

import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.params
    this.route.params.subscribe(
      (param: Params) => {
        // name of recipe in route
        // this.recipeService.recipes.forEach((rec)=> { if (rec.name == param['recipeName']) {return this.recipe = rec}})
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipiesById(this.id);
      }
    )
  }

  addIngredientsToShoppingList() {
    this.recipe.ingredients.forEach(element => {
        this.shoppingListService.addIngredient(element.name, element.amount)
      })
  }

}
