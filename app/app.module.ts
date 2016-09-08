
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { Product } from './prod.component';
import { Product2 } from './prod2.component';
import { Product3 } from './prod3.component';


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, Product, Product2, Product3],
    bootstrap: [AppComponent]
})

export class AppModule { }



