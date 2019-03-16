import { Directive,
          OnInit,

          Input,
          ElementRef,

          HostListener,
          Renderer2
        } from '@angular/core';

// Directive - no HTML View
// Use directive with other element
// <p appHighlight>hello</p>
// <div appHighlight>...</div>
// ngOnInit, onDestroy

// p, div, are called as host element, that host directive

@Directive({
  selector: '[appHighlight]' // must have [] in name
})
export class HighlightDirective implements OnInit {

  @Input()
  color = 'lightgreen';

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    console.log('Host Tag is ',
               this.hostElement.nativeElement.tagName);
  }

  @HostListener('mouseenter')
  onEnter() {
    console.log('mouse enter');

    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           this.color);

  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('mouse leave');

    this.renderer.removeStyle(this.hostElement.nativeElement,
                               'background');
  }
}
