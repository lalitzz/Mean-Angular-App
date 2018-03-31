export class TweetService {
  private tweets:Array<Object> = [{
      tweet: 'My first Tweet',
      owner: 'Lalit',
      created_at: '27-Mar-2017',
      updted_at: '27-Mar-2017'
    },
    {
      tweet: 'My first Tweet',
      owner: 'Lalit',
      created_at: '27-Mar-2017',
      updted_at: '27-Mar-2017'
    },
    {
      tweet: 'My first Tweet',
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


}
