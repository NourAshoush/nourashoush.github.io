import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {
  ngOnInit() {
    window.addEventListener('scroll', this.updateProgressBar.bind(this));
    window.addEventListener('mousemove', this.handleBarHover.bind(this));
    this.setCheckPointHeight();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.updateProgressBar.bind(this));
    window.removeEventListener('mousemove', this.handleBarHover.bind(this));
  }

  private updateProgressBar(): void {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${scrollTop / (scrollHeight - window.innerHeight) * 100}%`;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.setProperty('--progress', scrollPercent);
  }

  private setCheckPointHeight(): void {
    const {scrollHeight} = document.documentElement;
    const pageElements = document.querySelectorAll('.element');
    const pageCheckpoints = document.querySelectorAll('.checkpoint');

    for (let i = 0; i < pageElements.length; i++) {
      const pageElement = pageElements[i] as HTMLElement;
      const equivCheckpoint = pageCheckpoints[i] as HTMLElement;
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

}
