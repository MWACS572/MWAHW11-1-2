import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    
    <h1>Counter Page</h1>

    <button  (click)="decrease()">-</button>
    {{counter}}
    <button  (click)="increase()">+</button>
    <br/>
    <br/>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter:number ;
  @Output() counterChange:EventEmitter<number> = new EventEmitter();
  counterValue:number=0;
  constructor() {

    this.counterValue = parseInt(""+this.counter);

  }
  emitMessage(){
    this.counterChange.emit(this.counter);
  }

  ngOnChanges(){
    this.counterValue = this.counter;
  }

  setCounter(){
    this.counterValue = this.counter;
  }
  decrease(){
      this.counter =parseInt(""+this.counter)- 1;
      this.emitMessage();
      return false;
  }
  increase(){
    this.counter = parseInt(""+this.counter)+1;
    this.emitMessage();
    return false;
  }
}
