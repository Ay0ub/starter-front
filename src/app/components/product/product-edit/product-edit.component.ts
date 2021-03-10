import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelEnum } from './../../../enums/model-enum.enum';
import { DataService } from './../../../services/data.service';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  @ViewChild('content') content!: ElementRef<HTMLInputElement>
  @Output() get = new EventEmitter

  product: any = new Product;

  edit(id: number)
  {
    this.dataService.get(ModelEnum.product, id).subscribe(
      result => {
        this.product = result;
      }
    )
  }
  open(id: any)
  {
    this.edit(id)
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.update(id);
    }, (reason) => {
      //
    });
  }
  update(id: number)
  {
    this.dataService.update(ModelEnum.product ,id , this.product).subscribe(
      () => {
        this.get.emit()
      }, (error) => {
        //
      }
    )
  }
  
  ngOnInit(): void {
    
  }

}
