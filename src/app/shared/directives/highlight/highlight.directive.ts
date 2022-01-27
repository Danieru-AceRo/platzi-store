import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    elemnt: ElementRef
  ) { 
    elemnt.nativeElement.style.backgroundColor = 'red';
  }

}
