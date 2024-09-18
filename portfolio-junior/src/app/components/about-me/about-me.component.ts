import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  svgProjects = [
    {
      name: 'HTML',
      svgPath: 'assets/img/tecnologies/html5.svg'
    },
    {
      name: 'CSS',
      svgPath: 'assets/img/tecnologies/css.svg'
    },
    {
      name: 'JavaScript',
      svgPath: 'assets/img/tecnologies/javascript.svg'
    },
    {
      name: 'TypeScript',
      svgPath: 'assets/img/tecnologies/typescript.svg'
    },
    {
      name: 'Angular',
      svgPath: 'assets/img/tecnologies/angular.svg'
    },
    {
      name: 'React',
      svgPath: 'assets/img/tecnologies/react.svg'
    },    {
      name: 'Java',
      svgPath: 'assets/img/tecnologies/java.svg'
    },
    {
      name: 'C++',
      svgPath: 'assets/img/tecnologies/c++.svg'
    },
    {
      name: 'C#',
      svgPath: 'assets/img/tecnologies/csharp.svg'
    },
    {
      name: 'SpringBoot',
      svgPath: 'assets/img/tecnologies/spring.svg'
    },
    {
      name: 'Nodejs',
      svgPath: 'assets/img/tecnologies/nodejs.svg'
    },
    {
      name: 'React',
      svgPath: 'assets/img/tecnologies/react.svg'
    }
  ];
}