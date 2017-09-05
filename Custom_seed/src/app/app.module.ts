import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}