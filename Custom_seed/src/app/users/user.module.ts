import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserComponent } from "./user.component";
import { userRouting } from "./users.routing";

@NgModule({
    declarations: [UserComponent],
    imports: [CommonModule, userRouting]
})
export class UserModule {

}