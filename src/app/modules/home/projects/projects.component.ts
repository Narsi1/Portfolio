import { Component, OnInit } from '@angular/core';
interface IProject {
  title: string;
  description: string;
  url: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
 
  projects: IProject[] = [];
  ngOnInit(): void {
    this.projects = [
      {
        title: 'eCommerce',
        description: 'eCommerce WebApp build in Angular, SASS & Bootstrap 5',
        url: 'https://www.google.com'
      },
      {
        title: 'eCommerce',
        description: 'eCommerce WebApp build in Angular, SASS & Bootstrap 5',
        url: ''
      },
      {
        title: 'eCommerce',
        description: 'eCommerce WebApp build in Angular, SASS & Bootstrap 5',
        url: ''
      },
      {
        title: 'eCommerce',
        description: 'eCommerce WebApp build in Angular, SASS & Bootstrap 5',
        url: ''
      },
      {
        title: 'eCommerce',
        description: 'eCommerce WebApp build in Angular, SASS & Bootstrap 5',
        url: ''
      },
      {
        title: 'eCommerce',
        description: 'eCommerce WebApp build in Angular, SASS & Bootstrap 5',
        url: ''
      },
    ]
    
  }
  openproject(project: IProject): void {
    window.open(project.url,'blank')
  }
}
