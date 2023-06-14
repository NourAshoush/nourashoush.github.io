import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {
  pageElements = ["tech_skills", "education", "projects"];

  ngOnInit() {
    window.addEventListener('scroll', this.updateProgressBar.bind(this));
    window.addEventListener('mousemove', this.handleBarHover.bind(this));
    window.addEventListener('scroll', this.reveal);
    this.setCheckPointHeights();
    this.reveal();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.updateProgressBar.bind(this));
    window.removeEventListener('mousemove', this.handleBarHover.bind(this));
    window.removeEventListener('scroll', this.reveal);
  }

  clearURL(): void {
    setTimeout(() => {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 5);
  }

  @HostListener('document:fullscreenchange')
  @HostListener('window:resize')
  private updateProgressBar(): void {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${scrollTop / (scrollHeight - window.innerHeight) * 100}%`;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.setProperty('--progress', scrollPercent);
  }

  @HostListener('document:fullscreenchange')
  @HostListener('window:resize')
  private setCheckPointHeights(): void {
    const {scrollHeight} = document.documentElement;

    for (let i = 0; i < this.pageElements.length; i++) {
      const pageElement = document.querySelector(`#${this.pageElements[i]}_element`) as HTMLElement;
      const equivCheckpoint = document.querySelector(`#${this.pageElements[i]}_checkpoint`) as HTMLElement;
      const heightPercent = `${(pageElement.offsetTop / (scrollHeight - window.innerHeight) * 100) - 1}%`;
      equivCheckpoint.style.setProperty('--heightOffset', heightPercent);
    }
  }

  private handleBarHover(event: MouseEvent): void {
    const progressBarElement = document.querySelector('.progress-bar') as HTMLElement;
    const progressGhostElement = document.querySelector('.progress-bar-ghost') as HTMLElement;
    const rect = progressGhostElement.getBoundingClientRect();
    const isInVicinity = Math.abs(event.clientX - rect.left) <= 30;

    if (isInVicinity) {
      progressBarElement.classList.add('hoverBar');
      progressGhostElement.classList.add('hoverBar');
      this.addClassHoverPoint();
    } else {
      progressBarElement.classList.remove('hoverBar');
      progressGhostElement.classList.remove('hoverBar');
      this.removeClassHoverPoint();
    }
  }

  private addClassHoverPoint(): void {
    const checkpointElements = document.querySelectorAll('.checkpoint');
    for (let i = 0; i < checkpointElements.length; i++) {
      const checkpointElement = checkpointElements[i] as HTMLElement;
      checkpointElement.classList.add('hoverPoint');
    }
  }

  private removeClassHoverPoint(): void {
    const checkpointElements = document.querySelectorAll('.checkpoint');
    for (let i = 0; i < checkpointElements.length; i++) {
      const checkpointElement = checkpointElements[i] as HTMLElement;
      checkpointElement.classList.remove('hoverPoint');
    }
  }

  public reveal(): void {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementToReveal = (reveals[i] as HTMLElement).getBoundingClientRect();
      const revealPoint = 100;

      if (elementToReveal.top < windowHeight - revealPoint) {
        (reveals[i] as HTMLElement).classList.add('active');
      } else {
        (reveals[i] as HTMLElement).classList.remove('active');
      }
    }
  }

}
