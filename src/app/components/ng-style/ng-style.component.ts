import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-style",
  template: `
    <div class="col-12 d-flex justify-content-around align-items-center">
      <p [ngStyle]="{ 'font-size': '25px' }">
        Hello
      </p>
      <p [ngStyle]="{ 'font-size': size + 'px' }">
        Hello
      </p>
      <p [style.fontSize]="'75px'">
        Hello
      </p>
      <p [style.fontSize.px]="size">
        Hello
      </p>
    </div>
    <button class="btn btn-primary mx-5" (click)="size = size + 10">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary mx-5" (click)="size = size - 10">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size: number = 50;
  constructor() {}

  ngOnInit() {}
}
