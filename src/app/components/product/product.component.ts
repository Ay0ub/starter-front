import { ModelEnum } from './../../enums/model-enum.enum';
import { Product } from './../../entities/product';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  product = new Product();
  products: any;
  errors: any;
  type = "warning";

  get()
  {
    this.dataService.all(ModelEnum.product).subscribe(
      data => {
        this.products = data;
      }
    )
  }
  add()
  {
    this.dataService.store(ModelEnum.product ,this.product).subscribe(
      () => {
        this.products.push(this.product);
      }, (error) => {
        this.errors = _.values(_.values(error.error)[1]);
      }
    )
  }
  edit(id: number)
  {
    // this.dataService.get(ModelEnum.product, id).subscribe(
    //   result => {
    //     // this.product = result;
    //   }
    // )
    var element = _.find(this.products, o => o.id == id);
    this.product = element;
  }
  update(id: number)
  {
    this.dataService.update(ModelEnum.product ,id , this.product).subscribe(
      () => {
        this.get()
      }, (error) => {
        this.errors = _.values(_.values(error.error)[1]);
        this.get();
      }
    )
  }
  delete(id: number)
  {
    this.dataService.delete(ModelEnum.product ,id).subscribe(
      () => {
        _.remove(this.products, (n:any) => {
          return n.id == id;
        })
      }
    )
  }
  close(error: any) {
    this.errors.splice(this.errors.indexOf(error), 1);
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
    this.product = new Product;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.add();
    }, (reason) => {
      //
    });
  }

  ngOnInit(): void {
    this.get()
  }

}
