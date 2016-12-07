import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() value:number;
  constructor() { }

  ngOnInit() {
  }

}
