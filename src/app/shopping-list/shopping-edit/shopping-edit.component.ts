import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListServices) { }

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() onClear = new EventEmitter<void>();
  ingredient!: Ingredient;

  ngOnInit(): void { }
  onAddItem() {
    const ingredientName = this.nameInput?.nativeElement.value;
    const ingredientAmount = this.amountInput?.nativeElement.value;
    this.ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(this.ingredient);
    this.shoppingListService.addIngredient(this.ingredient);
  }

}
