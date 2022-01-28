import { Component, OnInit } from '@angular/core';

@Component({  
  template: `
    <button mat-button>
      <mat-icon>thumb_up</mat-icon>
      Click me!
    </button>

    <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
