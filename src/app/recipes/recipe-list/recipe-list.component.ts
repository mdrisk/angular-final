import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //recipe model
  recipes: Recipe[] = [
    new Recipe("Lasagna", "This is Garfields Lasagna", "http://cdn.gooseberrypatch.com/_images/sitenav/OLRBphotos/ClassicLasagnaDONE.jpg"),
    new Recipe("Lasagna", "This is Garfields Lasagna", "http://cdn.gooseberrypatch.com/_images/sitenav/OLRBphotos/ClassicLasagnaDONE.jpg"),
    new Recipe("Lasagna", "This is Garfields Lasagna", "http://cdn.gooseberrypatch.com/_images/sitenav/OLRBphotos/ClassicLasagnaDONE.jpg"),
    new Recipe("Lasagna", "This is Garfields Lasagna", "http://cdn.gooseberrypatch.com/_images/sitenav/OLRBphotos/ClassicLasagnaDONE.jpg")
];

  constructor() { }

  ngOnInit() {
  }

}
