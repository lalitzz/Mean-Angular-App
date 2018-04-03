import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  tweetData: Array<Object>;
  constructor(private tweets: TweetService) { }

  ngOnInit() {
    this.tweetData = this.tweets.getTweet();
  }

}
