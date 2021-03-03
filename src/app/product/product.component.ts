import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../entities/product';
import * as _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  products: any;
  apiGet = 'http://127.0.0.1:8000/api/products';
  apiPost = 'http://127.0.0.1:8000/api/product';
  product = new Product();
  errors: any;
  type = "warning";

  getProducts()
  {
    this.dataService.get(this.apiGet).subscribe(
      data => {
        this.products = data;
      }
    )
  }
  addProduct()
  {
    this.dataService.store(this.apiPost, this.product).subscribe(
      () => {
        this.products.push(this.product);
      }, (error) => {
        this.errors = _.values(_.values(error.error)[1]);
      }
    )
  }
  editProduct(id: number)
  {
    var element = _.find(this.products, o => o.id == id);
    this.product = element;
  }
  updateProduct(id: number)
  {
    this.dataService.update(this.apiPost, id, this.product).subscribe(
      () => {
        this.getProducts()
      }, (error) => {
        this.errors = _.values(_.values(error.error)[1]);
        this.getProducts();
      }
    )
  }
  deleteProduct(id: number)
  {
    this.dataService.delete(this.apiPost,id).subscribe(
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
    this.editProduct(id)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.updateProduct(id);
    }, (reason) => {
      //
    });
  }
  openCreate(content: any) {
    this.product = new Product();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.addProduct();
    }, (reason) => {
      //
    });
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
