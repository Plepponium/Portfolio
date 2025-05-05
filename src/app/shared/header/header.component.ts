import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLink: string = '';

  setActiveLink(linkId: string) {
    this.activeLink = linkId;
  }

  isActive(linkId: string): boolean {
    return this.activeLink === linkId;
  }
}
