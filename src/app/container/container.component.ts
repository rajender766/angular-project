import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfStrings: string[] = ['raj', 'sri', 'madhu', 'vamshi', 'vikram'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
