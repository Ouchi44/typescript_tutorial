export class Item {
  constructor(private name:string, private price:number){}

  public say(elem : HTMLElement | null) : void {
    if(elem){
      elem.innerHTML = 'Title: ' + this.name + ' Price: ' + this.price + 'yen';
    }
  }
}
