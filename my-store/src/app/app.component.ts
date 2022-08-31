import { Component } from '@angular/core';
import {Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  title: string = "";
  products: Product[] = [
    {
      id: "1",
      name: "ProductComponent 1",
      image : "https://w7.pngwing.com/pngs/88/592/png-transparent-toy-box-graphy-illustration-toy-box-child-food-photography-thumbnail.png",
      price : 100
    },
    {
      id: "2",
      name: "ProductComponent 1",
      image : "https://w7.pngwing.com/pngs/88/592/png-transparent-toy-box-graphy-illustration-toy-box-child-food-photography-thumbnail.png",
      price : 100
    },
    {
      id: "3",
      name: "ProductComponent 1",
      image : "https://w7.pngwing.com/pngs/88/592/png-transparent-toy-box-graphy-illustration-toy-box-child-food-photography-thumbnail.png",
      price : 100
    },
    {
      id: "4",
      name: "ProductComponent 1",
      image : "https://w7.pngwing.com/pngs/88/592/png-transparent-toy-box-graphy-illustration-toy-box-child-food-photography-thumbnail.png",
      price : 100
    }
  ];

  onLoaded(img: string){
    console.log('log padre', img)
  }
}
