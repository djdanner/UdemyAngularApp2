import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Name',
      'Test Recipe Description',
      'https://cdn.pixabay.com/photo/2017/07/04/17/05/mango-2471837_960_720.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
