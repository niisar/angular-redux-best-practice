import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-geo-board',
  templateUrl: './geo-board.component.html',
  styleUrls: ['./geo-board.component.scss']
})
export class GeoBoardComponent implements OnInit {

  constructor(private dataService: DataService) { }
  geocodes: any
  ngOnInit(): void {
  }

  getGeoCodes(location:string) {
    this.dataService.getGeoCodes(location).subscribe(res => {
      this.geocodes = res;
      console.log(this.geocodes)
    });
  }

  searchCodes(e) {
    this.getGeoCodes(e);
  }

}
