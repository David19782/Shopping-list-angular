import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

import { Recipe } from "./recipe.module";

export class RecipeService {
    recipeChanged =  new Subject<Recipe[]>()

    private recipes: Recipe[] = [
        new Recipe("Test recipe",
         "This is a test recipe", 
         "https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg",
         [new Ingredient("Apple", 6),
        new Ingredient("Bread", 4)] ),
        new Recipe("Test recipe",
         "This is a test recipe",
          "https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg",
          [new Ingredient("Orange", 6),
        new Ingredient("Lemons", 4)])
    ];

    setRecipes(recipes: Recipe[]){
        this.recipes = [...recipes]
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getIdByRecipe(recipe: Recipe) {
        return this.recipes.indexOf(recipe);
    }

    getRecipeById(id) {
        return this.recipes[id];
    }

    updateRecipe(id: number, recipe: Recipe){
        this.recipes[id] = recipe;
        this.recipeChanged.next(this.recipes.slice())
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(new Recipe(recipe.name, recipe.description, recipe.imagePath, [...recipe.ingredients]));
        this.recipeChanged.next(this.recipes.slice())

    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}