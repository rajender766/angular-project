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

  onChangesearchText(event: any) {
    this.onSearchTextChange.emit(this.searchText);
  }

  setSearchText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value;
  }
}
