import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  @Input() array: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
