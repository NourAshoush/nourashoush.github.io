import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-personal-portfolio';
  darkMode: boolean | undefined;

  ngOnInit() {
    this.detectDarkModePreference();
  }

  detectDarkModePreference() {
    this.darkMode = this.isDarkModePreferred();
    this.toggleDarkMode();
  }

  private isDarkModePreferred(): boolean {
    // Check if the user has a dark mode preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleDarkMode() {
    if (this.darkMode) {
      document.documentElement.classList.toggle('dark-mode');
    }
  }
}
