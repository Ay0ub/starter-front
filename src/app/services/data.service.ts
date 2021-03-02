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
  store(url: any, object: object)
  {
    return this.http.post(url, object);
  }
  update(url: any, id:number, object: object)
  {
    url = url + '/' + id;
    return this.http.put(url, object);
  }
  delete(url: any, id: number)
  {
    url = url + '/' + id;
    return this.http.delete(url);
  }
}
