import { Router } from '@angular/router';
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

  constructor(private dataService: DataService,private modalService: NgbModal, private router: Router) { }

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
        this.persons.push(this.person)
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
        _.remove(this.persons, (n:any) => {
          return n.id == id;
        })
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
    this.person = {
      firstName : "",
      lastName: "",
      email: "",
      phone: "",
    };
    // _.each(this.person, (value,key) => {
    //   console.log(key);
    //   _.set(this.person, key, "");
    // })

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.addPerson();
      //
    }, (reason) => {
      //
    });
  }

  ngOnInit(): void {
    this.getPersons();
    // console.log(this.router.url)
  }

}
