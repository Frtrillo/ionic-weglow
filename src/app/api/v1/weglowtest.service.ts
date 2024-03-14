import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weglowversion } from 'src/app/models/weglowversion.model';

const baseURL = "https://api.weglowapp.net";

@Injectable({
  providedIn: 'root'
})


export class WeglowtestService {

  constructor(private http: HttpClient) {

  }

  getWeglowVersio(): Observable<Weglowversion> {
    return this.http.get<Weglowversion>(baseURL + '/v1/version');
  }
}
