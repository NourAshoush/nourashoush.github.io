import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  pageElements = ["tech_skills", "education", "projects"];
  showModules: boolean = false;

  toggleShowModules(): void {
    this.showModules = !this.showModules;
    const modulesElement = document.querySelector('.academy-modules') as HTMLElement;
    const height = modulesElement.scrollHeight + 'px';
    const showArrow = document.querySelector('#show-arrow') as HTMLElement;

    if (this.showModules) {
      modulesElement.style.setProperty('max-height', height);
      showArrow.style.setProperty('transform', 'rotate(180deg)');
      setTimeout(() => {
        this.updateProgressBar();
        this.setCheckPointHeights();
      }, 500);
    } else {
      modulesElement.style.setProperty('max-height', '0');
      showArrow.style.setProperty('transform', 'rotate(0deg)');
      setTimeout(() => {
        this.updateProgressBar();
        this.setCheckPointHeights();
      }, 500);
    }
  }

  private updateProgressBar(): void {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${scrollTop / (scrollHeight - window.innerHeight) * 100}%`;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.setProperty('--progress', scrollPercent);
  }

  private setCheckPointHeights(): void {
    const {scrollHeight} = document.documentElement;

    for (let i = 0; i < this.pageElements.length; i++) {
      const pageElement = document.querySelector(`#${this.pageElements[i]}_element`) as HTMLElement;
      const equivCheckpoint = document.querySelector(`#${this.pageElements[i]}_checkpoint`) as HTMLElement;
      const heightPercent = `${(pageElement.offsetTop / (scrollHeight - window.innerHeight) * 100) - 1}%`;
      equivCheckpoint.style.setProperty('--heightOffset', heightPercent);
    }
  }

}
