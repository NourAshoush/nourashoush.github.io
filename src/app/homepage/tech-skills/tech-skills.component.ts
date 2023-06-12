import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit, OnDestroy {

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
      const elementToReveal = (reveals[i] as HTMLElement).getBoundingClientRect();
      const revealPoint = 50;

      if (elementToReveal.bottom < windowHeight - revealPoint && elementToReveal.top < windowHeight - revealPoint) {
        (reveals[i] as HTMLElement).classList.add('active');
      } else {
        (reveals[i] as HTMLElement).classList.remove('active');
      }
    }
  }

}
