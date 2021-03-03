import { Person } from './../../entities/person';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {

  constructor(private dataService: DataService) { }

  apiGet = 'http://127.0.0.1:8000/api/persons';
  person = new Person();
  persons: any;

  getPersons()
  {
    // this.dataService.get(this.apiGet,this.persons)
  }

  ngOnInit(): void {
  }

}
