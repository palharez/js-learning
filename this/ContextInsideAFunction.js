// Context insde a function
// Não pega o this global!

this.name = "Enzo";

function sayMyName() {
  console.log(this.name); // undefined
}

sayMyName();
