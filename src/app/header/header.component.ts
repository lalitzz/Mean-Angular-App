import { Component, ViewEncapsulation } from '@angular/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data:string = "Two Way";
  value:string = 'One Way';
}
