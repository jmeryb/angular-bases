import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public showHeroButton: boolean = true;
  public showAgeButton: boolean = true;
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(name: string):void{
    this.showHeroButton = false;
    this.name = name;
  }
  changeAge(age: number):void{
    this.showAgeButton = false;
    this.age = age;
  }
  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
    this.showAgeButton = true;
    this.showHeroButton = true;
  }

}
