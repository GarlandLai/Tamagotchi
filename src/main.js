import { Pet } from './../src/tamagotchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export let showInfo = (pet) => {
  $("#nameOutput").text(pet.name);
  $("#energyOutput").text(pet.energy);
  $("#fedOutput").text(pet.fed);
  $("#happinessOutput").text(pet.happiness);
}

$(document).ready(function() {
  let userPet = new Pet;
  $("#petForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $('#name').val();
    userPet.name = nameInput;
    showInfo(userPet);
    console.log(userPet);
  });
  userPet.game();
});
