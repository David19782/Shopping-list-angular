import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core"
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { shoppListService } from "../../shoppingList.service";

import { Ingredient } from "src/app/shared/ingredient.model";

@Component ({
    selector: "app-shopListEdit",
    templateUrl : "./shopListEdit.component.html",
    styleUrls: ["./shopListEdit.component.css"]

})

export class shopListEditComponent implements OnInit, OnDestroy{
    @ViewChild("f") slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editItemIndex: number;
    editItem: Ingredient;

    constructor(private shoppListservice: shoppListService){}
    ngOnInit() :void {
        this.subscription = this.shoppListservice.startedEditing.subscribe((i: number) => {
            this.editItemIndex = i;
            this.editMode = true;
            this.editItem = this.shoppListservice.getIngredient(this.editItemIndex);
            this.slForm.setValue({
                name: this.editItem.name,
                amount: this.editItem.amount
            })
        });
    }
    value;
    AddIng(form : NgForm) {
        this.value = form.value;
        if(form.valid){
            if(this.editMode){
                this.shoppListservice.updateIngredient(this.editItemIndex, new Ingredient(this.value.name, this.value.amount));
            }else{
                this.shoppListservice.addIng([new Ingredient(this.value.name, this.value.amount)]);
            }
            this.editMode = false;
            form.reset();
        }
    }

    onClear() {
        this.editMode = false;
        this.slForm.reset();
    }

    onDelete() {
        this.onClear();
        this.shoppListservice.deleteIngredient(this.editItemIndex);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    
}