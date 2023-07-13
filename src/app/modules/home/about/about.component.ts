import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TypeWriter from 't-writer.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private http: HttpClient) {
   
  }
  ngOnInit(): void {
    this.starttypewriter();
  }
  downloadcv() {
    const fileUrl = 'assets/files/Narasimha Reddy Modugu_CV.pdf'; // Replace 'filename.ext' with the actual file name and extension

    this.http
      .get(fileUrl, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(response);

        downloadLink.href = url;
        downloadLink.download = fileUrl.substr(fileUrl.lastIndexOf('/') + 1);
        downloadLink.click();

        window.URL.revokeObjectURL(url);
        downloadLink.remove();
      });
  }
  openlinkedin() {
    window.open('https://www.linkedin.com/in/narsi-modugu498/', 'blank');
  }
  opengithub() {
    window.open('https://github.com/Narsi1', 'blank');
  }
  starttypewriter() {
    const target = document.querySelector('.typewriter');
    const options = {
      loop: true,
      typeColor: '#da7d29',
      typeSpeed: 30,
    };

    const writer = new TypeWriter(target, options);
    writer
      .strings(600, 
        'Web Application Developer',
        'Frontend Developer',
        'Angular Developer',
        'Application & Fulfilment Officer',
        'Wordpress Developer',
      )
      .start();
  }
}
