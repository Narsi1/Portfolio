import { Component } from '@angular/core';
import { SKILLS } from 'src/shared/constants/skills.constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills= SKILLS;
}
