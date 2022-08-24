import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[hightLight]'
})
  
export class HighLightDirective implements OnChanges{
  @Input()
  hightLight: string = ""

  @Input()
  textColor: string = ""
  constructor(private eleRef: ElementRef, private renderr: Renderer2) {
    console.log(`Hight Light is : ${this.hightLight}`)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.renderr.setStyle(this.eleRef.nativeElement, 'background-color', this.hightLight || 'silver');
    this.renderr.setStyle(this.eleRef.nativeElement, 'color', this.textColor || 'white')
  }

  @HostListener('mouseenter')
  mouseIn() {
    this.renderr.setStyle(this.eleRef.nativeElement, 'fontSize', '40px');
  }

  @HostListener('mouseleave')
  mouseOut() { 
    this.renderr.removeStyle(this.eleRef.nativeElement, 'fontSize')
  }
}