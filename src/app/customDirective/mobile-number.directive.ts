import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[MobileNumber]'
})
export class MobileNumberDirective {

  constructor(private el:ElementRef) { }
  ngOnInit(){

  }
@HostListener('keyup') onKeyUp(){
  let text:string=this.el.nativeElement.value as string
  let lastCharacter:string=text.substring(text.length-1)
  if(isNaN(+lastCharacter)){
    this.el.nativeElement.value=text.substring(0,text.length-1)
  }
console.log(lastCharacter)
}
}
