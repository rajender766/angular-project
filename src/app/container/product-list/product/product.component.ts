import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: Product;
}

// {
//     id: number;
//     name: string;
//     description: string;
//     brand: string;
//     gender: string;
//     category: string;
//     size: number[];
//     color: string[];
//     price: number;
//     disscount?: number;
//     is_in_inventory: boolean;
//     items_left: number;
//     imageUrl: string;
//     slug: string;
//   };
