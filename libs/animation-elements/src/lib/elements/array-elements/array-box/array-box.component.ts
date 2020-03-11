import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-array-box',
  templateUrl: './array-box.component.html',
  styleUrls: ['./array-box.component.scss']
})
export class ArrayBoxComponent implements OnInit {

  @Input() index: number;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
