import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  index: number;
  editMode = false;
  recipeForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
     // console.log(this.editMode);
    })
  }

  onSubmit() {
    let currRecipe = new Recipe(this.recipeForm.value["name"], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value["ingredients"])
    console.log(currRecipe);
    
    if(this.editMode){
      this.recipeService.updateRecipe(this.index, currRecipe)
    }else{
      this.recipeService.addRecipe(currRecipe);
    }
    
    console.log(this.recipeForm);
    this.onCancel();
  }

  getControls() {
   // console.log((<FormArray>this.recipeForm.get('ingredients')).controls);
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        "name" : new FormControl(null, Validators.required),
        "amount": new FormControl(null , [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)] )
      })
    )
  }

  onCancel() {
    this.router.navigate(["../"], {
      relativeTo: this.route
    })
  }


  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.index);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    console.log("here");
    this.recipeForm = new FormGroup({
      "name": new FormControl(recipeName, Validators.required),
      "imagePath" : new FormControl(recipeImageUrl, Validators.required),
      "description" : new FormControl(recipeDescription, Validators.required),
      "ingredients":  recipeIngredients
    });
  }
  
  onDeleteIng(index: number){
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index)
  }

}
