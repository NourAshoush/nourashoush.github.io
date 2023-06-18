import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    window.addEventListener('scroll', this.reveal);
    this.reveal();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.reveal);
  }

  // clearURL(): void {
  //   setTimeout(() => {
  //     history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  //   }, 5);
  // }

  public scrollToElement(elementId: string): void {
    this.elementRef.nativeElement.querySelector(`#${elementId}`).scrollIntoView();
  }

  public reveal(): void {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementToReveal = (reveals[i] as HTMLElement).getBoundingClientRect();
      const revealPoint = 100;

      if (elementToReveal.top < windowHeight - revealPoint) { // && elementToReveal.bottom > windowHeight - (windowHeight - revealPoint)
        (reveals[i] as HTMLElement).classList.add('active');
      } else {
        (reveals[i] as HTMLElement).classList.remove('active');
      }
    }
  }

}
