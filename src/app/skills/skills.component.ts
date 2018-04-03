import { Component, OnInit } from '@angular/core';
import 'init.js'

declare var webGlObject: any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    webGlObject.init();
  }

}
