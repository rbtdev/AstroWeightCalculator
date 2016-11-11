var planets = [
    { name: 'Sun', gravity: 27.9 },
    { name: 'Mercury', gravity: 0.377 },
    { name: 'Venus', gravity: 0.9032 },
    { name: 'Earth', gravity: 1 },
    { name: 'Moon', gravity: 0.1655 },
    { name: 'Mars', gravity: 0.3895 },
    { name: 'Jupiter', gravity: 2.640 },
    { name: 'Saturn', gravity: 1.139 },
    { name: 'Uranus', gravity: 0.917 },
    { name: 'Neptune', gravity: 1.148 },
    { name: 'Pluto', gravity: 0.06 }
];

function changeImage() {
    var selectPlanet = document.getElementById('selectPlanet');
    var planetName = selectPlanet.options[selectPlanet.selectedIndex].text.toLowerCase();
    document.getElementById('planetPicture').src='./images/' + planetName + '.jpg;'
   
}


document.getElementById('selectPlanet').onchange = changeImage;
// created a configurable decimal place rounding function
	function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
      return rounded;
	  	  	  
    }

	
//1. How to dynamically generate the select element

for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];

    var optionElement = document.createElement('option'); //creates planet list elements
    optionElement.value = planet.gravity;
    optionElement.innerHTML = planet.name;

    var selectElement = document.getElementById('selectPlanet'); //adds planets list elements to list
    selectElement.appendChild(optionElement);

    //2. Bind a function to the click event
    var button = document.getElementById('calculateWeight');

	
	
	
	
    button.onclick = function() {
        var inputWeight = document.getElementById('inputWeight');

        var weight = inputWeight.value;

        var selectElement = document.getElementById('selectPlanet');

        var selectedIndex = selectElement.selectedIndex;

        var selectedOption = selectElement.options[selectedIndex];

        var planetName = selectedOption.text;
        var planetValue = selectedOption.value;


		
		//userWeightOnPlanet IN pounds;
		
	    var userWeightOnPlanet = roundToDecimal(weight * planetValue, 2);
		
						
	    // Standard output message for user
		var message = 'If you were on ' + planetName + ', you would weigh ' + userWeightOnPlanet + 'lbs. ';
	
	
	    // For options Sun and Moon, THE is added to the message
	
	if (planetName === "Sun" || planetName === "Moon") {
		var message = 'If you were on the ' + planetName + ', you would weigh ' + userWeightOnPlanet + 'lbs.';
		}
		
		//userWeightOnPlantet variable used to convert in to Kilograms
		var userWeightInKg = roundToDecimal(userWeightOnPlanet * 0.453592, 2);
		//console.log(userWeightInKg);
		//console.log(typeof userWeightInKg);

		// Kilogram output message for user
		var messageKG = 'Ancillary info: ' + userWeightInKg + ' kgs. ';
		
		
        var jokeMessage = 'What harm could a cheeseburger do?';
        
		var output = document.getElementById('output');
		var lbsToKg = document.getElementById('lbsToKg');
		var joke = document.getElementById('joke');

        // Assign the message to the output element we just fetched from the DOM
        output.innerHTML = message;
		lbsToKg.innerHTML = messageKG;
		joke.innerHTML = jokeMessage;
		
		

        
		
		
    }


}