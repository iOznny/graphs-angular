import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class GraphsService {

  constructor(private _http: HttpClient) { }

  // Obtener Redes Sociales
  public getSocialMediasUsers() {
    return this._http.get('http://localhost:3000/grafica');
  }

  public getUsersSocialMedia() {
    return this.getSocialMediasUsers()
    .pipe(
      delay(1500),
      map(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        return { labels, values };
      })
    );
  }

}
