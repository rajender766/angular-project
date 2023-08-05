import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  selectedProduct: Product;
  products = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description:
        'Lorem Ispum is simply dummy text of the priniting and typesetting industry, Lorem Ipsum has been the leading',
      brand: 'Nike',
      gender: 'MEN',
      category: 'Running',
      size: [6, 7, 8, 9, 10],
      color: ['skyblue', 'red', 'blue', 'gray'],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-shoes-LKXPhZ.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Nike React Miller',
      description:
        'Lorem Ispum is simply dummy text of the priniting and typesetting industry, Lorem Ipsum has been the leading',
      brand: 'Nike',
      gender: 'MEN',
      disscount: 121,
      category: 'Running',
      size: [5, 6, 7, 8],
      color: ['white', 'black', 'blue', 'gray'],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-WrLlWX.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 3,
      name: 'Nike React Infinity Run Flyknit',
      description:
        'Lorem Ispum is simply dummy text of the priniting and typesetting industry, Lorem Ipsum has been the leading',
      brand: 'Nike',

      gender: 'MEN',
      category: 'Running',
      size: [6, 7, 8, 9, 10],
      color: ['white', 'voilet', 'blue', 'gray'],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/133d8e36-a9d2-4171-8fd3-6eabf13c483b/infinityrn-4-se-road-running-shoes-STv3Zz.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 4,
      name: 'React Infinity Run Flyknit',
      description:
        'Lorem Ispum is simply dummy text of the priniting and typesetting industry, Lorem Ipsum has been the leading',
      brand: 'Nike',
      gender: 'MEN',
      category: 'Running',
      size: [6, 7, 8, 9, 10],
      color: ['white', 'black', 'merinPink', 'gray'],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0fd1487b-306c-4b70-a96a-cd6ac99e7d61/air-max-1-shoes-ZCSX34.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 5,
      name: 'Puma Infinity Run Flyknit',
      description:
        'Lorem Ispum is simply dummy text of the priniting and typesetting industry, Lorem Ipsum has been the leading',
      brand: 'Nike',
      disscount: 60,
      gender: 'MEN',
      category: 'Running',
      size: [6, 7, 8, 9, 10],
      color: ['white', 'mateer black', 'blue', 'silver gray'],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-WrLlWX.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 6,
      name: 'React Infinity Run Flyknit',
      description:
        'Lorem Ispum is simply dummy text of the priniting and typesetting industry, Lorem Ipsum has been the leading',
      brand: 'Nike',
      gender: 'MEN',
      category: 'Running',
      size: [6, 7, 8, 9, 10],
      color: ['Rose Pink', 'orange', 'blue', 'gray'],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-shoes-LKXPhZ.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
  ];

  totalProducts: number = this.products.length;
  totalProductsInStock: number = this.products.filter(
    (p) => p.is_in_inventory === true
  ).length;

  @Input()
  searchText: string = '';

  selectedFilterRadio: string = 'all';

  onFilterChanged(value: string) {
    this.selectedFilterRadio = value;
  }
}
