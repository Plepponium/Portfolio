import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
  {
    image: 'elpolloloco',
    name: 'El Pollo Loco',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    tech: ['JavaScript', 'HTML5', 'OOP'],
    github: 'https://github.com/Plepponium/ElPolloLoco',
    live: 'https://adrian-kleinschmidt.developerakademie.net/El%20Pollo%20Loco/index.html'
  },
  {
    image: 'join',
    name: 'Join',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    tech: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/AlexAntalToth/JOIN---ToDo-Software',
    live: 'https://join-398.developerakademie.net/'
  },
];

}
