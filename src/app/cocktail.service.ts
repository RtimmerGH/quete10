import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktailList:Cocktail[]=[
    {
      name:'Gin Fizz',
      price:'10',
      picture:'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_2181241651-768x512.jpg'
    },
    {
      name:'Mexicana',
      price:'15',
      picture:'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_1399731080-768x1152.jpg'
    },
    {
      name:'Mojito',
      price:'12',
      picture:'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_188424296.jpg'
    }
  ]

  constructor() { }

  public getCocktails(){
    return this.cocktailList;
  }
}

export interface Cocktail {
  name:string,
  price:string,
  picture:string
}
