import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  
  url = 'assets/mock-data/data.json';
  constructor(private http: HttpClient) { }
  getTeams() {
    return this.http.get(this.url);// making ajax call to get data.json from assets 
  }
}
