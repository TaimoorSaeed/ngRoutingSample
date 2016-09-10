import { Component } from '@angular/core';
import { Product } from './prod.component';
import  { Product2 } from './prod2.component'

@Component({
  selector: 'my-app',
  template: `<h1>iPhone Images</h1>
  <a routerLink="/prod">iPhone 4S</a>
  <a routerLink="/prod2">iPhone 4S</a>
  <a routerLink="/prod3">iPhone 6</a>
  <router-outlet></router-outlet>`
})

export class AppComponent { }
