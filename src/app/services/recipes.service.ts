import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipe/recipe.model'
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
    recipes: Recipe[] = [
        new Recipe(
            'scrambled eggs',
            'the most delicies breakfast',
            'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg',
            [new Ingredient('eggs', 3), new Ingredient('meat', 1)]),
        new Recipe(
            'jajecznica',
            'pyszna pyszna pyszna',
            'https://cdn.katalogsmakow.pl/2018/03/07/0x600/jajecznica-na-mleku-bez-tluszczu-fit-dietetyczna.690024.jpg',
            [new Ingredient('jajka', 3), new Ingredient('szynka', 1)]),
        new Recipe(
            'Spicy burger',
            'The best burger on the world!',
            'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
            [new Ingredient('hamburger buns', 1), new Ingredient('ground beef', 1)])
      ];
    selectedRecipe = new EventEmitter<Recipe>();
    
    getRecipies() {
        return this.recipes.slice();
    }

    getRecipiesById(index: number) {
        return this.recipes[index];
    }

}

