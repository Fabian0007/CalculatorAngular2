import { Component, OnInit , OnChanges, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, OnChanges{
  @Input() tax: number;
  amount: number= 1300000;
  @Output() totalChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes:SimpleChanges):any{
    this.calculate();
  }
  
  calculate(){
  	let value: number= this.amount * this.tax / 100;
  	this.totalChange.emit(value);
  }

}
