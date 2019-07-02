import { Pet } from './../src/tamagotchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export let showInfo = (pet) => {
  $("#nameOutput").text(`Name: ${pet.name}`);
  $("#energyOutput").text(`Energy: ${pet.energy}`);
  $("#fedOutput").text(`Fed: ${pet.fed}`);
  $("#happinessOutput").text(`Happiness: ${pet.happiness}`);
  $("#petForm").hide();
}

export let showDead = (pet) => {
  $('#output').hide();
  $('#endGame').text(`${pet.name} died!!`);
}

export let showDepressed = (pet) => {
  $('#output').hide();
  $('#endGame').text(`${pet.name} doesn\'t love you anymore`);
}

$(document).ready(function() {
   let userPet = new Pet;
  $("#petForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $('#name').val();
    userPet.name = nameInput;
    console.log(userPet);
    userPet.game(userPet);
  });
  $('#feed').click(function(){
      userPet.feed();
  });
  $('#play').click(function(){
      userPet.play();
  });
});
