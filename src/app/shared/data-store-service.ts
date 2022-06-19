import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipe/recipe.module";
import { RecipeService } from "../recipe/recipe.service";


@Injectable({
    providedIn: 'root'
})

export class DataStorageService{
    constructor(private http: HttpClient,
                private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put('https://shoppinglist2-468e8-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(res => {
            console.log(res)
        })
    }

    fetchRecipe() {
        this.http.get<Recipe[]>('https://shoppinglist2-468e8-default-rtdb.firebaseio.com/recipes.json').subscribe(res => {
            console.log(res)
            this.recipeService.setRecipes(res);
        })
    }
}