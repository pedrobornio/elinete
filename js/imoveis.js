let count = 1;
let play = true;
var interval;
var tempo = 5000;

iniciaBanner();

function iniciaBanner() {
  if (play === true) {
    setTimeout(() => {
      limpaTudo();
    }, tempo);

    var interval = setInterval(() => {
      if (play === false) {
        clearInterval(interval);
      } else {
        nextImage();
      }
    }, tempo);
  }
}

function limpaTudo() {
  document.getElementById("label1").className = "manual-btn";
  document.getElementById("label2").className = "manual-btn";
  document.getElementById("label3").className = "manual-btn";
  document.getElementById("label4").className = "manual-btn";
  document.getElementById("label5").className = "manual-btn";
}

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
    document.getElementById("label1").className = "manual-btn checked";
    document.getElementById("label2").className = "manual-btn";
    document.getElementById("label3").className = "manual-btn";
    document.getElementById("label4").className = "manual-btn";
    document.getElementById("label5").className = "manual-btn";
  }

  var menoscount = count - 1;

  document.getElementById("radio" + count).checked = true;
  document.getElementById("label" + menoscount).className = "manual-btn";
  document.getElementById("label" + count).className = "manual-btn checked";
}

function limpaClasname(countNovo, label) {
  document.getElementById("label" + countNovo).className = "manual-btn";
  document.getElementById("label" + label).className = "manual-btn checked";
}

function clickLabel(value) {
  clearInterval(interval);
  limpaClasname(count, value);
  count = value;
  play = false;
  setTimeout(() => {
    play = true;
    iniciaBanner();
  }, tempo);
}
