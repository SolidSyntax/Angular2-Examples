import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home.component";

const APP_ROUTES: Routes = [
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
