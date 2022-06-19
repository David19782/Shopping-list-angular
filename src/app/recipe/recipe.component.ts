import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "./recipe.module";
import { RecipeService } from "./recipe.service";


@Component({
    selector: "app-recipe",
    templateUrl: "./recipe.component.html",
    styleUrls: ["./recipe.component.css"],
})

export class RecipeComponent implements OnInit {
    @Output() change = new EventEmitter<Boolean>();
    currRecipe: Recipe;

    constructor(private recipeService: RecipeService){}
    ngOnInit(): void{
    }

    onChange(data){
        this.change.emit(data);
    }
}