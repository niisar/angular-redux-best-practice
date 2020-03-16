import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGeo } from './geo-dashboard/reducers/models/geo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchOption = []
  postUrl: string = "/maps/api/geocode/json?sensor=false&address=";
  constructor(private http: HttpClient) { }
  getGeoCodes(place: string): Observable<IGeo> {
    return this.http.get<any[]>(this.postUrl + place).pipe(
      map((res:any) => {
        let firstResult = res.results[0];
        let response: IGeo = {
          address_components: firstResult.address_components,
          geometry: firstResult.geometry
        };
        return response
      })
    );
  }
}
