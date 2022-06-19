import { Component,  OnDestroy,  OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subs: Subscription;
  recipes: Recipe[];
  
  
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subs = this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      	this.recipes = recipes;
    })
    
    this.recipes = this.recipeService.getRecipes();
  //  console.log(this.recipes);
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
  onNewRecipe() {
    //console.log("here")
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
