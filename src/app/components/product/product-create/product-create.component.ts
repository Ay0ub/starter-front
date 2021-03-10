import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelEnum } from './../../../enums/model-enum.enum';
import { DataService } from './../../../services/data.service';
import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges, ElementRef, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  product: any = new Product; 

  @ViewChild('content') content! : ElementRef<HTMLInputElement>
  @Output() get = new EventEmitter(); 

  add()
  {
    this.dataService.store(ModelEnum.product ,this.product).subscribe(
      () => {
        this.get.emit();
        // this.products.push(this.product);
      }, (error) => {
        //
      }
    )
  }
  open() {
    this.modalService.open(this.content).result.then((result) => {
      this.add();
    }, (reason) => {

    });
  }

  ngOnInit(): void {
    
  }
}
