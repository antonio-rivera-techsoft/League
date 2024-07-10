import { Directive, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appChampionType]',
  standalone: false
})
export class ChampionTypeDirective {

  constructor() { }

  @Input() appChampionType : any ="";
  @HostBinding('style.background-Color') bgColor:string = 'none'
  typeColors: { [key: string]: string } = {
    Fighter: '#F08030',
    Tank: '#6890F0',
    Mage: '#78C850',
    Assassin: '#F8D030',
    Suppport: '#F85888',
    Marksman: '#98D8D8',
  };

  ngOnInit(): void{
    this.bgColor = this.typeColors[this.appChampionType];
  }

}
