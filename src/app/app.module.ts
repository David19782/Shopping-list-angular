import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { headerComponent } from './header/header.component';
import { shopListComponent } from './shopList/shopList.component';
import { shopListEditComponent } from './shopList/shopListEdit/shopListEdit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { shoppListService } from './shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesStartComponent } from './recipe/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe/recipe.service';



@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    shopListComponent,
    shopListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,

    RecipeComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipeEditComponent 

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [shoppListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
