
import { Subject } from "rxjs";

import { Ingredient } from "./shared/ingredient.model";

export class shoppListService{
    ingChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private list: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 6)
    ];

    getList() {
        return this.list.slice();
    } 

    getIngredient(index: number) {
        return this.list[index];
    }

    addIng(ings: Ingredient[]) {
        ings.forEach(ing => {
            if(this.list.find((el) => el.name == ing.name) == undefined){
                this.list.push(ing);
            }else{
                this.list.find((el) => el.name == ing.name).amount = Number(this.list.find((el) => el.name == ing.name).amount) + Number(ing.amount);
            }
        })
        
        this.ingChanged.next(this.list.slice());
    }

    updateIngredient(index: number, newIng: Ingredient){
        this.list[index] = newIng;
        this.ingChanged.next(this.list.slice());
    }

    deleteIngredient(index: number){
        this.list.slice(index, 1);
        this.ingChanged.next(this.list.slice());
    }

    
}