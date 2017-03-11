import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipeItemComponent } from "./recipe-list/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start.component";
import { recipesRouting } from "./recipes.routing";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeStartComponent
    ],
    imports: [ReactiveFormsModule, CommonModule, recipesRouting]
})
export class RecipesModule {}