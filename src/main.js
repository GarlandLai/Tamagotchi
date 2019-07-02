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

    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=portland&appid=c9e142f1ee0159d269d4a4a49598522a`;

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }

      request.open("GET", url, true);
      request.send();

      const getElements = function(response) {
        $('#weather').show();
        $('.showHumidity').text(`Humidity: ${response.main.humidity}%`);
        $('.showTemp').text(`${Math.floor((response.main.temp - 273.15) + 32)} degrees`);
      }
      $('#weather').show();
  });
  $('#feed').click(function(){
    userPet.feed();
  });
  $('#play').click(function(){
    userPet.play();
  });
});
