import { Component, OnInit } from '@angular/core';
import { TweetService } from './../../services/tweet.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  tweet:object;
  constructor(private tweets: TweetService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    let id: number;
    //const id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (data: Data)=>{
        id = +data['id'];
        this.tweet = this.tweets.getSingleTweet(id);
      });
    
  }

}
