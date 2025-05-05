import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ATFComponent } from "./atf/atf.component";
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ATFComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
