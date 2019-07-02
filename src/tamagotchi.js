import $ from 'jquery';

export class Pet {
  constructor(name) {
    this.name = name;
    this.energy = 100;
    this.fed = 100;
    this.happiness = 100;
    this.dead = false;
    this.depressed = false;
  }

  game() {
    setInterval(() => {
      this.checkEnergy(1);
      this.checkFeed(-1);
      this.checkHappiness(-1);
      this.checkHealth();
      this.showInfo();
    }, 1000);
  }

  feed() {
    this.checkFeed(10);
    this.checkHappiness(5);
    this.checkEnergy(-15);
  }

  play() {
    this.checkHappiness(15);
    this.checkFeed(5);
    this.checkEnergy(-20);
  }

  checkHealth() {
    if(this.dead) {
      return console.log('Your pet died, you suck!');
    } else if (this.depressed) {
      return console.log('Your pet doesn\'t love you anymore');
    }
  }

  checkEnergy(value) {
    if(this.energy + value >= 100) {
      this.energy = 100;
    } else if(this.energy + value <= 0) {
      this.dead = true;
    } else {
      this.energy += value;
    }
  }

  checkFeed(value) {
    if(this.fed + value >= 100) {
      this.fed = 100;
    } else if(this.fed + value <= 0) {
      this.dead = true;
    } else {
      this.fed += value;
    }
  }

  checkHappiness(value) {
    if(this.happiness + value >= 100) {
      this.happiness = 100;
    } else if(this.happiness + value <= 0) {
      this.depressed = true;
    } else {
      this.happiness += value;
    }
  }

  showInfo() {
    $("#nameOutput").text(`Name: ${this.name}`);
    $("#energyOutput").text(`Energy: ${this.energy}`);
    $("#fedOutput").text(`Fed: ${this.fed}`);
    $("#happinessOutput").text(`Happiness: ${this.happiness}`);
    $("#petForm").hide();
  }

}
