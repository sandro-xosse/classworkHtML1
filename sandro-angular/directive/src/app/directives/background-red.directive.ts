import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[BackgroundRed]'
})
export class BackgroundRedDirective {

  @Input() set backgroundRed(color:string){
    const element=this.eleRef.nativeElement;
    element.style.background=color
    
  }

  constructor(private eleRef:ElementRef) { }

  
}
