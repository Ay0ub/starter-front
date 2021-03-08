import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor() { }

  product: any;

  ngOnInit(): void {
    this.product = {
      name:  "",
      color: "",
      price: "",
    }
  }

}
