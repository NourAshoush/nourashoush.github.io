import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public showNav(): void {
    (document.querySelector(".nav-button") as HTMLElement).classList.add('hide');
    (document.querySelector(".overlay") as HTMLElement).classList.remove('hide');
  }

  public hideNav(): void {
    (document.querySelector(".nav-button") as HTMLElement).classList.remove('hide');
    (document.querySelector(".overlay") as HTMLElement).classList.add('hide');
  }

  public scrollToElement(elementId: string): void {
    // @ts-ignore
    document.querySelector(`#${elementId}`).scrollIntoView();
  }
}
