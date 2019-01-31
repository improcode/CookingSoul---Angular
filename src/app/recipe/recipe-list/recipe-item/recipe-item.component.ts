import { Component, OnInit, Input } from '@angular/core';

import { RecipesService} from '../../../services/recipes.service';

import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipesService: RecipesService) { }

  onSelected() {
    this.recipesService.selectedRecipe.emit(this.recipe);
  }

  ngOnInit() {}

}
