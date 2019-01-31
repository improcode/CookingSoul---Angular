import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 1),
      ];
    
    getIngredient() {
        return this.ingredients.slice();
    };
    addIngredient(ingName: string, ingAmount: number) {
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
}