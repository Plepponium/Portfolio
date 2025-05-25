import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }



  activeLink: string = '';

  setActiveLink(linkId: string) {
    this.activeLink = linkId;
  }

  isActive(linkId: string): boolean {
    return this.activeLink === linkId;
  }
}
