import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './../services/data.service';
import { Person } from './../entities/person';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private dataService: DataService,private modalService: NgbModal) { }

  person = new Person();
  persons: any;
  apiGet = 'http://127.0.0.1:8000/api/persons';
  apiPost = 'http://127.0.0.1:8000/api/person';

  getPersons()
  {
    this.dataService.get(this.apiGet).subscribe(
      data => {
        this.persons = data;
      }
    )
  }
  addPerson()
  {
    this.dataService.store(this.apiPost, this.person).subscribe(
      () => {
        this.getPersons();
      }
    )
  }
  editPerson(id: number)
  {
    this.person = _.find(this.persons, (o) => {
      return o.id == id;
    })
  }
  updatePerson(id: number)
  {
    this.dataService.update(this.apiPost, id, this.person).subscribe(
      () => {
        this.getPersons();
      }
    )
  }
  deletePerson(id: number)
  {
    this.dataService.delete(this.apiPost, id).subscribe(
      () => {
        this.getPersons()
      }
    )
  }

  // ngModal
  openEdit(content: any, id: number) {
    this.editPerson(id)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.updatePerson(id);
    }, (reason) => {
      //
    });
  }
  openCreate(content: any) {
    // _.forEach(this.person, (value, key) => {
    //   //key = "";
    //   console.log('ok'+value+'ok '+key);
    // })
    this.person = {
      firstName : "",
      lastName: "",
      email: "",
      phone: "",
    };
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.addPerson();
      //
    }, (reason) => {
      //
    });
  }

  ngOnInit(): void {
    this.getPersons();
  }

}
