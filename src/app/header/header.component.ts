import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  data:string = "Two Way";
  value:string = 'One Way';
  isLogged: Boolean = false;

  constructor(private logService: AuthService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    // this.logService.getAuthStatus().subscribe(data => {
    //   this.isLogged = data;
    // });
    this.logService.getAuthStatus().subscribe(data => {
      this.isLogged =data;
    });
  }


  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.logService.logout();
  }

}
