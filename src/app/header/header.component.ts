import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  data:string = "Two Way";
  value:string = 'One Way';

  constructor(private logService: AuthService) {}
  ngOnInit() {}

  login() {
    this.logService.login();
  }

}
