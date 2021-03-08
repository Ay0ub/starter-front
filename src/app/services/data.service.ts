import { environment } from './../../environments/environment';
import { ModelEnum } from '../enums/model-enum.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL;

  all(api: ModelEnum)
  {
    return this.http.get(this.apiURL + api);
  }
  get(api: ModelEnum, id: number)
  {
    return this.http.get(this.apiURL + api + id)
  }
  store(api: ModelEnum, object: object)
  {
    return this.http.post(this.apiURL + api, object);
  }
  update(api: ModelEnum, id:number, object: object)
  {
    return this.http.put(this.apiURL + api + id, object);
  }
  delete(api: ModelEnum, id: number)
  {
    return this.http.delete(this.apiURL + api + id);
  }
}
