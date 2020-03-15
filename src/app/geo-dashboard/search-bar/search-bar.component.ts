import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  faSearch = faSearch;
  @Output() onSelectedOption = new EventEmitter();
  myControl = new FormControl();
  location = "";
  constructor() { }

  ngOnInit(): void {
    this.myControl.valueChanges.subscribe(userInput => {
      this.location=userInput;
    })
  }

  onSearch() {
    this.onSelectedOption.emit(this.location)
  }
}
