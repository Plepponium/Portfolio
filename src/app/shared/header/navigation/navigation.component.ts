import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Output() linkClicked = new EventEmitter<void>();

  currentLang = 'en';
  activeLink: string = '';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.switchLanguage(savedLang);
    } else {
      this.switchLanguage(this.translate.getDefaultLang() || 'en');
    }
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
