var Arnold={

  name: "Arnold",
  health: 50,
  puny: false,
  oneLiners: ["Ahh","come live","rawr"],




}

Arnold.machethe= function(enemy){
    enemy.health -=100;
    console.log(Arnold.oneLiners[1])
    if(enemy.health <=0 ){
      return enemy.scream;
    }
  }
console.log(Arnold.name)
//Arnold.machethe(thug);


var hero= function(name,health,oneLiners){

    this.puny = false;
    this.name=name;
    this.health=health;
    this.oneLiners=oneLiners;

}

hero.prototype.assist= function(){return("Hey Arnold "+ this.oneLiners[1])};

var angel = new hero("Joe",90,["meow","ruff"])
var barf = new hero("Johnny",30,["run","jumpf"])

console.log(barf.assist())
console.log(barf.name)







