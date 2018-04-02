import { Component
        , OnInit
 } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  hello = 'This should Work';
  isLogged = false;
  constructor(private logService: AuthService) {}
  ngOnInit(){
    this.logService.getAuthStatus().subscribe(data => {
      this.isLogged =data;
    });
  }
  countChange(event) {
    //console.log(event);
  }
}
