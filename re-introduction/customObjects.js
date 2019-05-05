function makePerson(first, last) {
  return {
    first: first,
    last: last
  };
}
function personFullName(person) {
  return person.first + " " + person.last;
}
function personFullNameReversed(person) {
  return person.last + ", " + person.first;
}

var s = makePerson("Simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"

function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + " " + this.last;
    },
    fullNameReversed: function() {
      return this.last + ", " + this.first;
    }
  };
}

var s = makePerson("Simon", "Willison");
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"

var s = makePerson("Simon", "Willison");
var fullName = s.fullName;
fullName(); // undefined undefined

function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ", " + this.first;
  };
}
var s = new Person("Simon", "Willison");

function personFullName() {
  return this.first + " " + this.last;
}
function personFullNameReversed() {
  return this.last + ", " + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}

function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + " " + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ", " + this.first;
};

var s = new Person("Simon", "Willison");
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"

var s = "Simon";
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = "";
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS

"This can now be reversed".reversed(); // desrever eb won nac sihT

var s = new Person("Simon", "Willison");
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return "<Person: " + this.fullName() + ">";
};

s.toString(); // "<Person: Simon Willison>"

function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}

var bill = trivialNew(Person, "William", "Orange");

function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON
