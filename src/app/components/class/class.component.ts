import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styles: []
})
export class ClassComponent implements OnInit {
  alert: string = "alert-danger";
  loading: boolean = false;

  props: any = {
    danger: true
  };

  constructor() {}

  ngOnInit() {}

  ejecutar() {
    this.loading = true;

    setTimeout(() => (this.loading = false), 3000);
  }
}
