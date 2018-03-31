export class TweetService {
  tweet: Object;
  private tweets:Array<Object> = [{
      id: 1,
      tweet: 'My first Tweet',
      owner: 'Lalit',
      created_at: '27-Mar-2017',
      updted_at: '27-Mar-2017'
    },
    {
      id: 2,
      tweet: 'My Second Tweet',
      owner: 'Lalit',
      created_at: '27-Mar-2017',
      updted_at: '27-Mar-2017'
    },
    {
      id: 3,
      tweet: 'My Third Tweet',
      owner: 'Lalit',
      created_at: '27-Mar-2017',
      updted_at: '27-Mar-2017'
    }
  ];

  getTweet(): Array<Object> {
    return this.tweets.slice();
  }

  addTweetes(tweet: Object): void {
    this.tweets.push(tweet);
  }

  getSingleTweet(id: number): object {
    for(let obj of this.tweets) {
      if(obj['id'] === id){
        this.tweet = obj;
        break;
      }
    }

    return this.tweet;
  }

}
