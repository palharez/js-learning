// function.bind(this)(arg)
// bind = ligar
// retorna a função chamada porém, ligada ao contexto que foi passado
// bound function

this.name = "Camila";

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "Isabela",
  age: 35,
  sayMyAge: function() {
    console.log(this.name, this.age);
  }
};

// Função liga aum contexto
// const boundSayMyname = sayMyName.bind(dev);
// boundSayMyname(19);

const age = dev.sayMyAge;
age(); // undefined undefined

const age = dev.sayMyAge.bind(dev);
age(); // Isabela 35
