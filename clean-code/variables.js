// Use meaningful and pronounceable variable names

// Bad
const yymmdstr = moment().format("YYYY/MM/DD");

// Good
const currentDate = moment().format("YYYY/MM/DD");


// Use the same vocabulary for the same type of variable

// Bad
getUserInfo();
getClienteData();
getCustomerRecord();

// Good
getUser();


// Use searchable names

// Bad
setTimeout(blastOff, 86400000);

// Good
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);


// Use explanatory variables

// Bad
const address = "One Infinite Loop, Cupertino 95014"
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
)

// Good
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);


// Avoid Mental Mapping
// Explicit is better than implicit

// Bad
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});

// Good
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});


// Don't add unneeded context
// If your class/object name tells you something, don't repeat that in your variable name.

// Bad
const Car = {
  carMake: "Honda",
  carModel:  "Accord",
  carColor: "Blue"  
};

function paintCar(car) {
  car.carColor = "Red";
}

// Good
const Car = {
  make: "Honda",
  model:  "Accord",
  color: "Blue"  
};

function paintCar(car) {
  car.color = "Red";
}


// Use default arguments instead of short circuiting or conditionals

// Bad
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}

// Good
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}