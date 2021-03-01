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

  getProducts(api: String)
  {
    this.dataService.get(api).subscribe(
      data => {
        this.products = data;
      }
    )
  }
  addProduct()
  {
    this.dataService.store(this.apiPost, this.product).subscribe(
      () => {
        this.getProducts(this.apiGet);
      }
    )
  }
  editProduct(id: number)
  {
    
  }
  updateProduct(id: number)
  {
    this.dataService.update(this.apiPost, id, this.product).subscribe(
      () => {
        this.getProducts(this.apiGet)
      }
    )
  }
  deleteProduct(id: number)
  {
    this.dataService.delete(this.apiPost,id).subscribe(
      () => {
        this.getProducts(this.apiGet);
      }
    )
  }
  open(content: any, id: number) {
    console.log(id);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`)
      console.log(id)
    }, (reason) => {
      console.log(`Dismissed by ${reason}`);
    });
  }

  ngOnInit(): void {
    this.getProducts(this.apiGet)
  }

}
