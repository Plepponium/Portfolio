import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  hoveredSkill: string | null = null;

  skills = [
    { image: 'html', label: 'HTML' },
    { image: 'css', label: 'CSS' },
    { image: 'javascript', label: 'JavaScript' },
    { image: 'typescript', label: 'TypeScript' },
    { image: 'angular', label: 'Angular' },
    { image: 'firebase', label: 'Firebase' },
    { image: 'git', label: 'Git' },
    { image: 'restapi', label: 'Rest Api' },
    { image: 'scrum', label: 'Scrum' },
    { image: 'material', label: 'Material Design' },
    { image: 'learn', label: 'Continually learning' },
  ];



}
