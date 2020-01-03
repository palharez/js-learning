// "use strcit";

this.name = "Valeska";

function sayMyName() {
  console.log(this.name);
}

const user = {
  name: "Diego",
  sayMyName: function() {
    console.log(this.name);
  }
}

user.sayMyName();

console.log(window.name);

/*
  No browser:
    O this da função funciona com o global.
    Do objeto ele mantem a referência do objeto.
  
  O this do browser representa o window;

  Com "use strict":
    Todo mundo fica isolado no seu contexto e é sempre muito mlehor!
*/