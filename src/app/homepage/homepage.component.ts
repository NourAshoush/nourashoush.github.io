import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  ngOnInit() {
    window.addEventListener('scroll', this.updateProgressBar.bind(this));

  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.updateProgressBar.bind(this));
  }

  private updateProgressBar(): void {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${scrollTop / (scrollHeight - window.innerHeight) * 100}%`;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.setProperty('--progress', scrollPercent);
  }

}
