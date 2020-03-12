import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string;
  @Input() disabled: boolean;

  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // handlers
  clicked(event) {
    if (!this.disabled) {
      this.buttonClicked.emit(true);
    } else {
      this.buttonClicked.emit(false);
    }
  }

}
