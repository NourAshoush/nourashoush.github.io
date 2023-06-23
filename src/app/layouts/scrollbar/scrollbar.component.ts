import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit, OnDestroy {
  pageElements = ["about", "tech_skills", "education", "projects"];
  isDarkMode = document.documentElement.classList.contains('dark-mode');

  ngOnInit() {
    window.addEventListener('scroll', this.updateProgressBar.bind(this));
    window.addEventListener('mousemove', this.handleBarHover.bind(this));
    this.setCheckPointHeights();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.updateProgressBar.bind(this));
    window.removeEventListener('mousemove', this.handleBarHover.bind(this));
  }

  @HostListener('document:fullscreenchange')
  @HostListener('window:resize')
  private updateProgressBar(): void {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${scrollTop / (scrollHeight - window.innerHeight) * 100}%`;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.setProperty('--progress', scrollPercent);
  }

  private handleBarHover(event: MouseEvent): void {
    const progressBarElement = document.querySelector('.progress-bar') as HTMLElement;
    const progressGhostElement = document.querySelector('.progress-bar-ghost') as HTMLElement;
    const toggleThemeElement = document.querySelector('.theme-toggle') as HTMLElement;
    const rect = progressGhostElement.getBoundingClientRect();
    const isInVicinity = Math.abs(event.clientX - rect.left) <= 60;

    if (isInVicinity) {
      progressBarElement.classList.add('hoverBar');
      progressGhostElement.classList.add('hoverBar');
      toggleThemeElement.classList.add('hoverToggle');
      this.addClassHoverPoint();
    } else {
      progressBarElement.classList.remove('hoverBar');
      progressGhostElement.classList.remove('hoverBar');
      toggleThemeElement.classList.remove('hoverToggle');
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

  public scrollToElement(elementId: string): void {
    // @ts-ignore
    document.querySelector(`#${elementId}`).scrollIntoView();
  }

  public toggleDarkMode() {
    (document.querySelector('.theme-toggle') as HTMLElement).classList.add('toggleTransition');
    setTimeout(() => {
      document.documentElement.classList.toggle('dark-mode');
      this.isDarkMode = !this.isDarkMode;
      (document.querySelector('.theme-toggle') as HTMLElement).classList.remove('toggleTransition')
    }, 500);
  }

}
