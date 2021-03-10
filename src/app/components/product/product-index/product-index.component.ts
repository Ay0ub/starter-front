import { ProductDeleteComponent } from './../product-delete/product-delete.component';
import { ProductEditComponent } from './../product-edit/product-edit.component';
import { ProductCreateComponent } from './../product-create/product-create.component';
import { ModelEnum } from './../../../enums/model-enum.enum';
import { Product } from './../../../entities/product';
import { DataService } from './../../../services/data.service';
import {  Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit{

  @ViewChild(ProductCreateComponent) productCreate!: ProductCreateComponent;
  @ViewChild(ProductEditComponent) productEdit!: ProductEditComponent;
  @ViewChild(ProductDeleteComponent) productDelete!: ProductDeleteComponent;

  constructor(private dataService: DataService) { }

  product: any = new Product;
  products: any;
  isLoading = true;

  openToCreate()
  {
    this.productCreate.open();
  }
  openToEdit(id: number)
  {
    this.productEdit.open(id);
  }
  openDeletingConfirm(product: Product)
  {
    this.productDelete.open(product);
  }

  get()
  {
    this.dataService.all(ModelEnum.product).subscribe(
      data => {
        this.products = data;
        this.isLoading = false;
      }
    )
  }

  ngOnInit(): void {
    this.get()
  }

}
