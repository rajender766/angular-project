import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  name: string = 'iPhone';
  price: number = 1000;
  color: string = 'Matter Black';
  DisPrice: number = 500;
}
