import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../recipe.model'

import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    
  }

  addIngredientsToShoppingList() {
    this.recipe.ingredients.forEach(element => {
        this.shoppingListService.addIngredient(element.name, element.amount)
      })
  }

}