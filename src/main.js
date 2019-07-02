import { Pet } from './../src/tamagotchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let userPet = new Pet;
  $("#petForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $('#name').val();
    userPet.name = nameInput;
    console.log(userPet);
    userPet.game();
  });
});
