import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user.component";

const USER_ROUTES: Routes = [
    { path: '', component: UserComponent }
];

export const userRouting = RouterModule.forChild(USER_ROUTES);