import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss']
})
export class ItemQuantityComponent implements OnInit {
  @Input() quantity: number = 0;
  @Input() maxValue?: number = 0;
  @Input() disable: boolean = false;
  @Output() setQuantityEvent = new EventEmitter<number>();

  values:number[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.maxValue){
      for(let i = 1; i <= this.maxValue; i++){
        this.values.push(i);
      }
    }
  }

  setQuantity(value: number) {
    this.setQuantityEvent.emit(value);
  }

}
