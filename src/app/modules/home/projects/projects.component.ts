import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/shared/constants/projects.constants';
import { IProject } from 'src/shared/interface/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
 
  projects: IProject[] = PROJECTS;
  ngOnInit(): void {}
  openproject(project: IProject): void {
    window.open(project.url,'blank')
  }
}
