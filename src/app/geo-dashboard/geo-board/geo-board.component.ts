import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/search.reducer';
import * as SearchAction from "../reducers/search.actions";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-geo-board',
  templateUrl: './geo-board.component.html',
  styleUrls: ['./geo-board.component.scss']
})
export class GeoBoardComponent implements OnInit {
  geoData: Observable<any>;
  constructor(private dataService: DataService,
    private store: Store<{ geoDashboard: State }>
  ) {

    this.geoData = this.store.pipe(select('geoDashboard'));
  }
  geocodes: any
  ngOnInit(): void {
    this.geoData.subscribe(res => {
      if(res.search.geodata){
        this.geocodes = res.search.geodata;
      }
    })
  }

  getGeoCodes(location: string) {
    this.dataService.getGeoCodes(location).subscribe(res => {
      this.geocodes = res;
      console.log(this.geocodes)
    });
  }

  searchCodes(e) {
    this.store.dispatch(SearchAction.loadSearchs({ location: e }));
  }
}
