const rangeInput = document.querySelectorAll(".range-input input");
priceInput = document.querySelectorAll(".price-input input");
progress = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", trocaComInput());
});

function trocaComInput(e) {
  let minVal = parseInt(priceInput[0].value),
    maxVal = parseInt(priceInput[1].value);

  if (maxVal - minVal >= priceGap && maxVal <= 2000000) {
    if (e.target.className === "input-min") {
      rangeInput[0].value = minVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    } else {
      rangeInput[1].value = maxVal;
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  }
}

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      var novoValorMin = minVal.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      var novoValorMax = maxVal.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      priceInput[0].value = novoValorMin;
      priceInput[1].value = novoValorMax;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

function moneyChange(event) {
  const onlyDigits = event.target.value
    .split("")
    .filter((s) => /\d/.test(s))
    .join("")
    .padStart(3, "0");
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
  event.target.value = maskCurrency(digitsFloat);

  const valorString = event.target.value;
  const valorInter = valorString.replace(/[^0-9]/g, "");
  const valorReplece = parseInt(valorInter);
  const inputMin = document.querySelector("#input-min");
  const inputMinValor = inputMin.value.replace(/[^0-9]/g, "");

  const calculoDiferenca = valorInter - inputMinValor;

  var myInt = valorReplece;
  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(myInt), myFunc);
  var contaIndice = intArr.length - 2;

  var valorInteiro = "";

  if (contaIndice == 4 && calculoDiferenca >= 1000) {
    valorInteiro = `${intArr[0]}${intArr[1]}${intArr[2]}${intArr[3]}`;
  }

  if (contaIndice == 5 && calculoDiferenca >= 1000) {
    valorInteiro = `${intArr[0]}${intArr[1]}${intArr[2]}${intArr[3]}${intArr[4]}`;
  }

  if (contaIndice == 6 && calculoDiferenca >= 1000) {
    valorInteiro = `${intArr[0]}${intArr[1]}${intArr[2]}${intArr[3]}${intArr[4]}${intArr[5]}`;
  }

  if (contaIndice == 7 && calculoDiferenca >= 1000) {
    valorInteiro = `${intArr[0]}${intArr[1]}${intArr[2]}${intArr[3]}${intArr[4]}${intArr[5]}${intArr[6]}`;
  }
}

function maskCurrency(valor, locale = "pt-BR", currency = "BRL") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(valor);
}

function moneyLimp(event) {
  event.target.value = "R$ 0,00";
}
