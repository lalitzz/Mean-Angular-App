import { Component,
          OnInit,
          Input,
          AfterViewInit,
          AfterContentInit,
          Output,
          EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, AfterContentInit {
  value= "Value";
  arr = [1,2,3,4];
  show = true;
  @Input() element: {type: string};
  @Output() fire: EventEmitter<any> = new EventEmitter();
  @ViewChild('d') d: ElementRef;
  input:string = "Input";
  count:number = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    //console.dir(this.d);
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }

  }

  ngAfterViewInit() {
    //console.log(this.element);
  }

  ngAfterContentInit() {
    //console.log(this.element);
  }

  change() {
    this.fire.emit(this.count);
  }

}
