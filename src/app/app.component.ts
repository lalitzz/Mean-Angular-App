import { Component
        , OnInit
 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  hello = 'This should Work';
  ngOnInit(){

  }
  countChange(event) {
    //console.log(event);
  }
}
