import { AfterViewInit, Component, ElementRef, Renderer2, Input } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {

  private sr!: typeof ScrollReveal;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.card');
    elements.forEach((element: any, index: any) => {
      this.renderer.addClass(element, `card-${index}`);
    });
    this.sr = ScrollReveal();
    this.sr.reveal('.card-0', {
      origin: 'right',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.card-1', {
      origin: 'bottom',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.card-2', {
      origin: 'left',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });
  }

  @Input()sectionTitle!: string;
  @Input() cardData!: any[];
  @Input() linkUrl!: string;
  @Input() btnTxt!: string

}


