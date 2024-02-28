//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
console.log(assistantManager.health);   // reaching object elements


// It can also be created this way
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
house2.priceUSD=12;   // updating
console.log(house2);


// Writing with array

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

// function can be added

var car = {};

car.color = "red";
car.turnKey = function() { 
  console.log('engine running'); 
}

car.turnKey();  // calls function
