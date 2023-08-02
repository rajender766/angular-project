import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name = 'Rajender'
  product = {
  name: 'iPhone 13',
  price :  1000,
  color :'silver',
  disPrice : 500,
  instock : 3,
  pImage: 'IMG-20201231-WA0055.jpg'
  }



getDicountPrice(){
 return this.product.price - this.product.disPrice
}


}
