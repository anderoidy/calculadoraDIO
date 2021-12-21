function calculadoraJs() {
  const operacao = Number(
    prompt(
      "Escolha uma operação!\n 1 - soma(+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n 4 - divisão Real(/)\n 5 - resto da divisão(%)\n 6 - divisao Potenciação(**)"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("Erro opção não existe digite um opção de 1 a 6");
    calculadoraJs();
  } else {
    let n1 = Number(prompt("Ïnsira o primeiro valor"));
    let n2 = Number(prompt("Insira o segundo valor "));
    let resultado;

    if (!n1 || !n2) {
      alert("Erro - parametros inválidos");
      calculadoraJs();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicaçao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisao de ${n1} % ${n2} = ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt(
          "Deseja fazer uma outra operação? \n 1 - sim\n 2 - Não"
        );

        if (opcao == 1) {
          calculadoraJs();
        } else if (opcao == 2) {
          alert("Até mais");
        } else {
          alert("Digite uma opção valida!");
          novaOperacao();
        }
      }
    }
    /* // Aqui usando if
    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicaçao();
    } else if (operacao == 4) {
      divisaoReal();
    } else if (operacao == 5) {
      divisaoInteira();
    } else if (operacao == 6) {
      potenciacao();
    }
    */
   //usando switch case
    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();

        break;
      case 3:
        multiplicaçao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}

calculadoraJs();
