import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { routing } from "./app.routing";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { CoreModule } from "./core/core.module";
import { HeaderComponent } from "./header.component";
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        RecipeBookAppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        ShoppingListModule,
        CoreModule,
        routing
    ],
    providers: [ShoppingListService, RecipeService],
    bootstrap: [RecipeBookAppComponent]
})
export class AppModule {
}
