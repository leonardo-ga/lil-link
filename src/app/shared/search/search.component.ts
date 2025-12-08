import { Component, computed, EventEmitter, input, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  categories = input.required<string[]>();
  selectedCategory = signal('');
  searchText = signal('');

  // Computed trimmed value
  trimmedSearchText = computed(() => this.searchText().trim());

  // Output event to send search query to parent
  @Output() search = new EventEmitter<string[]>();

  ngOnInit(): void {
    const list = this.categories();
    if (list.length) {
      this.selectedCategory.set(list[0]);
    }
  }

  onSearch() {
    const text = this.searchText();
    if (!text) return;
    const toSearch: string[] = [this.selectedCategory(), text];
    console.log(toSearch);
    this.search.emit(toSearch);
  }
}
