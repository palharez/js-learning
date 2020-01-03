// this na arrow function
// pega o this do escopo anterior
// escopo léxico

this.name = "Valeska";

const age = age => {
  const birthYear = age => {
    const year = 2020 - age;
    console.log(this.name, year);
  };

  birthYear(age);
};

const dev = {
  sayMyName: () => {
    console.log(this.name);
  }
};

dev.sayMyName();
