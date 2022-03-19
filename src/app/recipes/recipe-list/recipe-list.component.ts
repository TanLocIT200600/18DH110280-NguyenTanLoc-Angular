import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-1/116241171_126364569134121_8182763672981624046_n.png?stp=dst-png_p148x148&_nc_cat=101&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=tGarjpYkdZ4AX_Lewmd&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-OzZnrBfiAyN2YcINB_GAhE_cKNF10wlOfOiZk-PX_hQ&oe=625B3407"),
    new Recipe("A Test Recipe", "This is simply a test", "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-1/116241171_126364569134121_8182763672981624046_n.png?stp=dst-png_p148x148&_nc_cat=101&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=tGarjpYkdZ4AX_Lewmd&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-OzZnrBfiAyN2YcINB_GAhE_cKNF10wlOfOiZk-PX_hQ&oe=625B3407")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
