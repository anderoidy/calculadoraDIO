//usando funcao normal
let varRecFunc = function () {
  console.log("mensagem da funcao anonima!");
};

//chamando a normal
varRecFunc();

//usando Arrow Fuction
let varRecArrow = () => console.log("Mesagem da Arrow Fucntion");

//chamando a arrow
varRecArrow();



//nao rodo nao sei por que 
function functionSomaNormal(c, d) { 
    return c + d
}

functionSomaNormal(3, 3)

//outras formas de usar a arrowFunction
//nao rodo nao sei por que 
let soma = function (a, b) {
  return a + b;
};

soma(3, 5);
