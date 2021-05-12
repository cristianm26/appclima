import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey= '567c79495f43c6394ae44704d5250b10';
  url = 'http://api.openweathermap.org/data/2.5/weather?&appid='
  constructor(private http: HttpClient) { }

  getClima(ciudad: string):Observable<any>{
    const URL = this.url + this.apiKey + '&q=' + ciudad;
    return this.http.get(URL)
  }
}
