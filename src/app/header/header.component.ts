import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-store-service";

@Component ({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class headerComponent{
    constructor(private dataStore: DataStorageService) {}
    
    onSaveData() {
        this.dataStore.storeRecipes();
    }

    onFetchData() {
        this.dataStore.fetchRecipe();
    }

}