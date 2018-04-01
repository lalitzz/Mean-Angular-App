import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  //@Input() tweet: {type:string};
  tweetData: Array<Object>; 

  constructor(private tweets: TweetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tweetData = this.tweets.getTweet();
  }

  show(id: number) {
    console.log(this.route);
    console.log(id);
    this.router.navigate(['./../edit', id], {relativeTo: this.route});
  }

}
