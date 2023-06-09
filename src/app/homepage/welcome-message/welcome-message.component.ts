import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})

export class WelcomeMessageComponent implements OnInit, OnDestroy {

  ngOnInit() {
    window.addEventListener('scroll', this.reveal);
    this.reveal();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.reveal);
  }

  public reveal(): void {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;
      const revealPoint = 500;

      if (revealTop < windowHeight - revealPoint) {
        (reveals[i] as HTMLElement).classList.add('active');
      } else {
        (reveals[i] as HTMLElement).classList.remove('active');
      }
    }
  }
}
