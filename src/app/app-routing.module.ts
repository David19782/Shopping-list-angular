import { NgModule  } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipesStartComponent } from "./recipe/recipes-start/recipes-start.component";
import { shopListComponent } from "./shopList/shopList.component";


const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/recipes",
        pathMatch: "full"
    },
    {
        path: "recipes",
        component: RecipeComponent,
        children: [
            {
                path: "",
                component: RecipesStartComponent
            },
            {
                path: "new",
                component: RecipeEditComponent
            },
            {
                path: ":id",
                component: RecipeDetailComponent
            },
            {
                path: ":id/edit",
                component: RecipeEditComponent
            }
        ]
    },
    {
        path: "shopping-list",
        component: shopListComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
}