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

  all(model: ModelEnum)
  {
    return this.http.get(this.apiURL + model);
  }
  get(model: ModelEnum, id: number)
  {
    return this.http.get(this.apiURL + model + id)
  }
  store(model: ModelEnum, object: object)
  {
    return this.http.post(this.apiURL + model, object);
  }
  update(model: ModelEnum, id:number, object: object)
  {
    return this.http.put(this.apiURL + model + id, object);
  }
  delete(model: ModelEnum, id: number)
  {
    return this.http.delete(this.apiURL + model + id);
  }
}
