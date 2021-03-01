import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get(url: any)
  {
    return this.http.get(url);
  }
  store(url: any, data: any)
  {
    return this.http.post(url, data);
  }
  update(url: any, id:number, data: any)
  {
    url = url + '/' + id;
    return this.http.put(url, data);
  }
  delete(url: any, id: number)
  {
    url = url + '/' + id;
    return this.http.delete(url);
  }
}
