import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
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
      imageUrl: 'http://static,nike.com/a/images/c_limited.png',
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
      imageUrl: 'http://static,nike.com/a/images/c_limited.png',
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
      imageUrl: 'http://static,nike.com/a/images/c_limited.png',
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
      imageUrl: 'http://static,nike.com/a/images/c_limited.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 5,
      name: 'Nike React Infinity Run Flyknit',
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
      imageUrl: 'http://static,nike.com/a/images/c_limited.png',
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
      imageUrl: 'http://static,nike.com/a/images/c_limited.png',
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
