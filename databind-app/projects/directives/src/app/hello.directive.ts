import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive ({
  selector: '[hello]'
})
export class HelloDirective {
  constructor(eleRef: ElementRef, renderr:Renderer2) {
    eleRef.nativeElement.innerText = "Change Directive";
    renderr.addClass(eleRef.nativeElement, 'red');
  }
}