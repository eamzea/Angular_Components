import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appStandOut]"
})
export class StandOutDirective {
  constructor(private er: ElementRef) {}

  @Input("appStandOut") newColor: string;
  @HostListener("mouseenter")
  mouseEntro() {
    this.standOut(this.newColor || "grey");
  }

  @HostListener("mouseleave") mouseSalio() {
    this.standOut("black");
  }

  private standOut(color: string) {
    this.er.nativeElement.style.backgroundColor = color;
  }
}
