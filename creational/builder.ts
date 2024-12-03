class Burger {
    private readonly name: string;
    private readonly cheese:boolean;
    private readonly bacon:boolean;
    private readonly lettuce:boolean;
    private readonly tomato:boolean;
    constructor(name:string,cheese:boolean,bacon:boolean,lettuce:boolean,tomato:boolean){
        this.name = name;
        this.cheese = cheese;
        this.bacon = bacon;
        this.lettuce = lettuce;
        this.tomato = tomato;
    }
    public showDetails():void{
        console.log(`The burger is ${this.name} and has ${this.cheese ? "cheese" : "no cheese"} ${this.bacon ? "bacon" : "no bacon"} ${this.lettuce ? "lettuce" : "no lettuce"} ${this.tomato ? "tomato" : "no tomato"}`);
    }
    public isVegan():boolean{
        return !this.cheese && !this.bacon
    }
}

class BurgerBuilder {
    private name:string;
    private cheese:boolean = false;
    private bacon:boolean = false;
    private lettuce:boolean = false;
    private tomato:boolean = false;
    constructor(name:string){
        this.name = name;
    }
    public withCheese():BurgerBuilder{
        this.cheese = true;
        return this;
    }
    public withBacon():BurgerBuilder{
        this.bacon = true;
        return this;
    }
    public withLettuce():BurgerBuilder{
        this.lettuce = true;
        return this;
    }
    public withTomato():BurgerBuilder{
        this.tomato = true;
        return this;
    }
    public build():Burger{
        return new Burger(name,this.cheese,this.bacon,this.lettuce,this.tomato);
    }

}

const BLTBurgerBuilder = new BurgerBuilder("BLT Burger");
const bltBurger = BLTBurgerBuilder.withCheese().withBacon().withLettuce().withTomato().build();
const cheeseburgerBuilder = new BurgerBuilder("Cheeseburger");
const cheeseburger = cheeseburgerBuilder.withCheese().withLettuce().build();
const veganBurgerBuilder = new BurgerBuilder("Vegan Burger");
const veganBurger = veganBurgerBuilder.withTomato().withLettuce().build();

console.log(bltBurger.isVegan());
console.log(cheeseburger.isVegan());
console.log(veganBurger.isVegan());

bltBurger.showDetails();
cheeseburger.showDetails();
veganBurger.showDetails();