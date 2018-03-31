import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  //@Input() tweet: {type:string};
  tweetData: Array<Object>; 

  constructor(private tweets: TweetService) { }

  ngOnInit() {
    this.tweetData = this.tweets.getTweet();
  }

}
