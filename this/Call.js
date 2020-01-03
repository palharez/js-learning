// function.call(this, arg1, arg2)
// call do inglês chamar
// retornou o this do contexto que eu enviar

this.name = "Camila";

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "Isabela"
};

sayMyName.call(this, 18); // Camila 18
sayMyName.call(dev, 19); // Isabela 19

console.log(dev); // { name: 'Isabela', age: 19 }
console.log(this); // { name: 'Camila', age: 18 }

// function.apply(this, [arg1, arg2])
// retorn o this
