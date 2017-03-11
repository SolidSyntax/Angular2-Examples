import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListAddComponent } from "./shopping-list-add.component";

@NgModule({
    declarations: [ShoppingListComponent, ShoppingListAddComponent],
    imports: [CommonModule, FormsModule],
    exports: [ShoppingListComponent]
})
export class ShoppingListModule {}