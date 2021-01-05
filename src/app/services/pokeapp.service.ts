import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeappService {

  constructor(
    private http: HttpClient
  ) { }

  apiURL: string = environment.apiURL;

  getGenerations() {
    return this.http.get(`${this.apiURL}/generation`).pipe(map((res: any) => res));
  }

  getGenerationDetails(url: string) {
    return this.http.get(`${url}`).pipe(map((res: any) => res));
  }
}
