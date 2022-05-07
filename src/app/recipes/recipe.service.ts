import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model'
import { ShoppingListServices } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root', })

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/pzeste-information-2-1629787729195368810835.jpeg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe("A Test Recipe", "This is simply a test", "https://www.silverkris.com/wp-content/uploads/2018/07/Spattiserie-264x312.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private slService: ShoppingListServices) { }

  getRecipes() {
    return this.recipes;
  }


  addIngredentToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredents(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
