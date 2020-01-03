// Context inside a method
// Não pega o this global, somento do objeto.
// Independente se estiver no modo estrito ou não

this.name = "João";

const dev = {
  name: "Cleyton",
  sayMyName: function() {
    console.log(this.name); // Cleyton
  }
};

dev.sayMyName();
