import { showInfo, showDead, showDepressed } from './../src/main.js';
import $ from 'jquery';

export class Pet {
  constructor(name) {
    this.name = name;
    this.energy = 1000;
    this.fed = 1000;
    this.happiness = 1000;
    this.dead = false;
    this.depressed = false;
  }

  game(pet) {
    let gameTimer = setInterval(() => {
      this.checkEnergy(10);
      this.checkFeed(-5);
      this.checkHappiness(-5);
      this.checkHealth(gameTimer);
      showInfo(pet);
    }, 100);
  }

  feed() {
    this.checkFeed(100);
    this.checkHappiness(50);
    this.checkEnergy(-150);
  }

  play() {
    this.checkHappiness(150);
    this.checkFeed(-50);
    this.checkEnergy(-100);
  }

  checkHealth(timer) {
    if(this.dead) {
      clearInterval(timer);
      showDead(this);
    } else if (this.depressed) {
      clearInterval(timer);
      showDepressed(this);
    }
  }

  checkEnergy(value) {
    if(this.energy + value >= 1000) {
      this.energy = 1000;
    } else if(this.energy + value <= 0) {
      this.energy = 0;
      this.dead = true;
    } else {
      this.energy += value;
    }
  }

  checkFeed(value) {
    if(this.fed + value >= 1000) {
      this.fed = 1000;
    } else if(this.fed + value <= 0) {
      this.fed = 0;
      this.dead = true;
    } else {
      this.fed += value;
    }
  }

  checkHappiness(value) {
    if(this.happiness + value >= 1000) {
      this.happiness = 1000;
    } else if(this.happiness + value <= 0) {
      this.happiness = 0;
      this.depressed = true;
    } else {
      this.happiness += value;
    }
  }

}
