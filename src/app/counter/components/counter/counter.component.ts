import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    private startingNumber: number = 10;
    public counter: number = this.startingNumber;

    increaseBy(value: number):void{
      this.counter+=value;
    }
    reset():void{
      this.counter=this.startingNumber;
    }
}