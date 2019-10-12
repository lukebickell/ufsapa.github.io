import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutMarkdown: string
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAboutData()
      .subscribe(about => this.aboutMarkdown = about)
  }

}
