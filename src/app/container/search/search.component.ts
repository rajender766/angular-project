import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchInputEl: ElementRef;

  setSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.onSearchTextChange.emit(this.searchText);
  }
}
