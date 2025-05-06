import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  introductionText: string = 
  `A good friend noticed my passion for all things tech and pushed me to give coding a shot – ` + 
  `turns out, solving problems with code feels like working on a never-ending puzzle, and I love it. ` + 
  `The constant evolution in tech keeps me curious and challenged every single day.\n\n` +
  `Let’s connect and create something amazing together!\n\n`;

  locationText: string =
  `Based in Baden-Württemberg – I'm open to remote work, but not looking to relocate.`

  learningText: string =
  `I'm always curious to explore new technologies and love pushing my skills to the next level.`

  solvingText: string =
  `When tackling problems, I usually start by experimenting and refining my approach. While I often work analytically on my own, I’m always open to collaborating with others when a challenge goes beyond my skill set. I believe in a mix of planning and hands-on problem solving to find the most effective solutions.`



}
