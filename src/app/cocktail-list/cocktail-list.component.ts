import { Component } from '@angular/core';
import { Cocktail, CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails!:Cocktail[];
  constructor(private cocktailService:CocktailService){}

  ngOnInit(){
    this.cocktails = this.cocktailService.getCocktails()
  }
}
