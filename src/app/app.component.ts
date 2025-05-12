import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ATFComponent } from "./atf/atf.component";
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TransitionImageComponent } from './transition-image/transition-image.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ATFComponent, HeaderComponent, AboutMeComponent,TransitionImageComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
