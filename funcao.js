function funcaoNormal() {
  console.log("Sou uma funcao declarativa! ");
}

funcaoNormal();

function funcaoComPArametro(parametro) {
  console.log(parametro);
}

funcaoComPArametro("Eu sou o que esta escrito no parametro");

let varQueReceAno = function () {
  console.log("Eu sou a funcao anonima! ");
};

varQueReceAno();

function funcaoDentroOutra(funcaoNormal) {
    console.log(funcaoNormal)
}

funcaoDentroOutra("mensagem que ta dentro da funcao dentro da outra")