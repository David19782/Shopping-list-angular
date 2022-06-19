import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { shoppListService } from "../shoppingList.service";


@Component ({
    selector: "app-shopList",
    templateUrl: "./shopList.component.html",
    styleUrls: ["./shopList.component.css"],
    providers: []
})

export class shopListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    subs: Subscription;

    constructor(private shoppListservice: shoppListService){}

    ngOnInit(): void{
        this.ingredients = this.shoppListservice.getList();
        this.subs = this.shoppListservice.ingChanged.subscribe((ing : Ingredient[]) => {
            this.ingredients = ing;
        })
    }

    onEditItem(index: number) {
        this.shoppListservice.startedEditing.next(index);
    }

    ngOnDestroy(): void{
        this.subs.unsubscribe();
    }
}