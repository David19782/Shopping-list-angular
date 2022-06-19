import { Component, Input, OnInit} from '@angular/core';

import { Recipe } from '../../recipe.module';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() currRecipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {
   // console.log(this.currRecipe)

  }
  
}
