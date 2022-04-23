import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListServices {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new EventEmitter<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredients() {
    return this.ingredients;
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredents(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  updateIngredient(index: any, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient; this.ingredientChanged.emit(this.ingredients.slice());
  }
  deleteIngredient(index: any) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}

