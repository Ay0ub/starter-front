import { Person } from './../../entities/person';
import { ModelEnum } from './../../enums/model-enum.enum';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private dataService: DataService,private modalService: NgbModal, private router: Router) { }

  person = new Person;
  persons: any;
  errors: any;
  type = "warning";

  get()
  {
    this.dataService.all(ModelEnum.person).subscribe(
      data => {
        this.persons = data;
      }
    )
  }
  add()
  {
    this.dataService.store(ModelEnum.person, this.person).subscribe(
      () => {
        this.persons.push(this.person)
      }, (error) => {
        this.errors = _.values(_.values(error.error)[1]);
      }
    )
  }
  edit(id: number)
  {
    this.person = _.find(this.persons, (o) => {
      return o.id == id;
    })
  }
  update(id: number)
  {
    this.dataService.update(ModelEnum.person, id, this.person).subscribe(
      () => {
        this.get();
      }, (error) => {
        this.errors = _.values(_.values(error.error)[1]);
        this.get();
      }
    )
  }
  delete(id: number)
  {
    this.dataService.delete(ModelEnum.person, id).subscribe(
      () => {
        _.remove(this.persons, (n:any) => {
          return n.id == id;
        })
      }
    )
  }

  // ngModal
  openEdit(content: any, id: number) {
    this.edit(id)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.update(id);
    }, (reason) => {
      //
    });
  }
  openCreate(content: any) {
    this.person = new Person;

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.add();
      //
    }, (reason) => {
      //
    });
  }

  close(error: any) {
    this.errors.splice(this.errors.indexOf(error), 1);
  }

  ngOnInit(): void {
    this.get();
    // console.log(this.router.url)
  }

}
