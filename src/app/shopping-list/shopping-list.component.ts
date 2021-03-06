import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[] ;

  constructor(private shoppingListService: ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }
  onEditItem(index: any) {
    this.shoppingListService.startedEditing.emit(index);
  }

}
