import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  overlayOpen = false;

  toggleOverlay(): void {
    this.overlayOpen = !this.overlayOpen;

    if (this.overlayOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeOverlay(): void {
    this.overlayOpen = false;
    document.body.classList.remove('no-scroll');
  }

}
