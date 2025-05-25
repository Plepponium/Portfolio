import { Component } from '@angular/core';
import { ATFComponent } from "../atf/atf.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { TransitionImageComponent } from "../transition-image/transition-image.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactformComponent } from "../contactform/contactform.component";

@Component({
  selector: 'app-main-content',
  imports: [ATFComponent, AboutMeComponent, TransitionImageComponent, SkillsComponent, PortfolioComponent, ContactformComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
