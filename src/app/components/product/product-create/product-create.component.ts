import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor() { }

  product = {
    name: "ex",
    color: 'ex',
    price: '3'
  }

  ngOnInit(): void {
    // this.product = {
    //   name: "",
    //   color: "",
    //   price: "",
    // }
  }

}
