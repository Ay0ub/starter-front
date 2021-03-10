import { Product } from 'src/app/entities/product';
import { ModelEnum } from './../../../enums/model-enum.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './../../../services/data.service';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  @ViewChild('content') content!: ElementRef<HTMLInputElement>
  @Output() get = new EventEmitter;

  product: any = new Product;
  
  open(product: Product)
  {
    this.product = product;
    this.modalService.open(this.content).result.then((result) => {
      this.delete(this.product.id);
    }, (reason) => {

    });
  }
  delete(id: number)
  {
    this.dataService.delete(ModelEnum.product ,id).subscribe(
      () => {
        this.get.emit();
      }
    )
  }

  ngOnInit(): void {
  }

}
