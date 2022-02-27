import { Component } from '@angular/core';
import { Product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgparent = '';
  
  onLoaded(img: string) {
    console.log("Log padre", img)
  }
}
