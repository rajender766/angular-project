import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  setSearchText(inputEl: HTMLInputElement) {
    this.onSearchTextChange.emit(this.searchText);
    this.searchText = inputEl.value;
  }
}
