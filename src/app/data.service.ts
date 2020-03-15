import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchOption = []
  postUrl: string = "/maps/api/geocode/json?sensor=false&address=";
  constructor(private http: HttpClient) { }
  getGeoCodes(place: string): Observable<any[]> {
    return this.http.get<any[]>(this.postUrl + place);
  }
}
