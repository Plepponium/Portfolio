import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule,TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() isMobile: boolean = false
  @Output() linkClicked = new EventEmitter<void>();

  currentLang = 'en';
  activeLink: string = '';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  handleClick(linkId: string) {
    this.activeLink = linkId;
    this.linkClicked.emit();
  }

  isActive(linkId: string): boolean {
    return this.activeLink === linkId;
  }
}
