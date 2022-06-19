import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { shoppListService } from 'src/app/shoppingList.service';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  currRecipe: Recipe;
  id: number;
  constructor(private shopListservice: shoppListService,
              private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  toShopList() {
    this.shopListservice.addIng([...this.currRecipe.ingredients]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.currRecipe = this.recipeService.getRecipeById(this.id);
    })
  }
  onEdit() {
    this.router.navigate(["edit"], {relativeTo: this.route}); 

  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["../"], {
      relativeTo: this.route
    })
  }

}
