const dados = [
  {
    id: 1,
    titulo: "Casa na 108 Norte",
    status: "Ativo",
    tipo: "VENDE-SE",
    imovel: "CASA",
    valor: 580000,
    banheiros: 5,
    quartos: 4,
    metrosConstruido: 284,
    fotoCapa: "casa108norte/capa.jpg",
  },
  {
    id: 2,
    titulo: "Casa no Berta Ville",
    status: "ATIVO",
    tipo: "VENDE-SE",
    imovel: "CASA",
    valor: 290000,
    banheiros: 2,
    quartos: 3,
    metrosConstruido: 100,
    fotoCapa: "casabertaville/capa.jpeg",
  },
  {
    id: 3,
    titulo: "Casa na 509 Sul",
    status: "ATIVO",
    tipo: "VENDE-SE",
    imovel: "CASA",
    valor: 920000,
    banheiros: 5,
    quartos: 3,
    metrosConstruido: 100,
    fotoCapa: "casa509sul/capa.jpeg",
  },
  {
    id: 4,
    titulo: "Casa na 108 Norte",
    status: "Ativo",
    tipo: "VENDE-SE",
    imovel: "CASA",
    valor: 680000,
    banheiros: 5,
    quartos: 4,
    metrosConstruido: 284,
    fotoCapa: "casa108norte/capa.jpg",
  },
  {
    id: 5,
    titulo: "Casa no Berta Ville",
    status: "ATIVO",
    tipo: "VENDE-SE",
    imovel: "CASA",
    valor: 230000,
    banheiros: 2,
    quartos: 3,
    metrosConstruido: 100,
    fotoCapa: "casabertaville/capa.jpeg",
  },
  {
    id: 6,
    titulo: "Casa na 509 Sul",
    status: "ATIVO",
    tipo: "VENDE-SE",
    imovel: "CASA",
    valor: 820000,
    banheiros: 5,
    quartos: 3,
    metrosConstruido: 100,
    fotoCapa: "casa509sul/capa.jpeg",
  },
];

const divPai = document.getElementById("ContainerSearch");
const filtrosAbrir = document.getElementById("FiltrosAbrir");
const containerOrder = document.querySelector("#ContainerOrder");
const iconExpand = document.querySelector("#iconExpand");

function maisRecente() {
  contadorInter = 1;
  visibleOrder("hidden", 0);
  containerOrder.classList.remove("openFiltros");
  filtrosAbrir.innerHTML = `Mais Recente
  <span id="iconExpand" class="material-symbols-outlined iconAbrir">expand_more</span>`;
  divPai.innerHTML = "";
  const maisRecenteDados = dados.sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    } else {
      return true;
    }
  });
  exibiDadosImoveis(maisRecenteDados);
}

function menosRecente() {
  contadorInter = 1;
  visibleOrder("hidden", 0);
  containerOrder.classList.remove("openFiltros");
  filtrosAbrir.innerHTML = `Menos Recente
  <span id="iconExpand" class="material-symbols-outlined iconAbrir">expand_more</span>`;
  divPai.innerHTML = "";
  const menosRecenteDados = dados.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    } else {
      return true;
    }
  });
  exibiDadosImoveis(menosRecenteDados);
}

function maiorPreco() {
  contadorInter = 1;
  visibleOrder("hidden", 0);
  containerOrder.classList.remove("openFiltros");
  filtrosAbrir.innerHTML = `Maior Preço
  <span id="iconExpand" class="material-symbols-outlined iconAbrir">expand_more</span>`;
  divPai.innerHTML = "";
  const maiorPrecoDados = dados.sort(function (a, b) {
    if (a.valor > b.valor) {
      return -1;
    } else {
      return true;
    }
  });
  exibiDadosImoveis(maiorPrecoDados);
}

function menorPreco() {
  contadorInter = 1;
  visibleOrder("hidden", 0);
  filtrosAbrir.innerHTML = `Menor Preço
  <span id="iconExpand" class="material-symbols-outlined iconAbrir">expand_more</span>`;
  divPai.innerHTML = "";
  const menorPrecoDados = dados.sort(function (a, b) {
    if (a.valor < b.valor) {
      return -1;
    } else {
      return true;
    }
  });
  containerOrder.classList.remove("openFiltros");
  exibiDadosImoveis(menorPrecoDados);
}

window.onload = function () {
  maisRecente();
};

function exibiDadosImoveis(dados) {
  dados.forEach((imoveis) => {
    const imovelValor = imoveis.valor;

    const valorUpdate = imovelValor.toLocaleString("de-DE", {
      maximumFractionDigits: 2,
    });

    divPai.innerHTML =
      divPai.innerHTML +
      `
    <div id="${imoveis.id}" class="boxImovel" >
    <div id="imovelCapa${imoveis.id}" class="imovelCapa">
      <div class="imovelCategoria">${imoveis.tipo}</div>
      <div id="imovelFavorito${imoveis.id}" class="imovelFavorito" onclick="imovelFavorito(${imoveis.id})">
        <span class="material-symbols-outlined">
          favorite
        </span>
      </div>
    </div>
    <div class="imovelTitulo">
    ${imoveis.titulo}
    </div>
    <div class="imovelPreco">
      <div class="imovelPrecoInv">
        <div class="imovelPrecoInvText">
          Valor do Investimento
        </div>
        <div class="imovelPrecoInvTextValor">
          R$ ${valorUpdate},00
        </div>
      </div>
      <div class="imovelStatus">
        <span class="material-symbols-outlined iconStatus">
          check_circle
        </span>
        ${imoveis.status}
      </div>            
    </div>
    <div class="imovelInfos">
      <div class="imovelBox">
        <div class="imovelIconInfo">
          <span class="material-symbols-outlined">
            bathtub
          </span>
        </div>
        <div class="imovelTextInfo">
          ${imoveis.banheiros} Banheiros
        </div>
      </div>
      <div class="imovelBox">
        <div class="imovelIconInfo">
          <span class="material-symbols-outlined">
            night_shelter
          </span>
        </div>
        <div class="imovelTextInfo">
          ${imoveis.quartos} Quartos
        </div>
      </div>
      <div class="imovelBox">
        <div class="imovelIconInfo">
          <span class="material-symbols-outlined">
            home
          </span>
        </div>
        <div class="imovelTextInfo">
          ${imoveis.metrosConstruido} M²
        </div>
      </div>
    </div>
    <div class="imovelButton" onclick="eventClick(${imoveis.id})">
      <span class="material-symbols-outlined iconButton">
        add_circle
      </span>
      MAIS INFORMAÇOES
    </div>

    </div> </div>`;

    const divBgImage = document.getElementById(`imovelCapa${imoveis.id}`);

    divBgImage.style.backgroundImage = `url("../assets/${imoveis.fotoCapa}")`;
  });
}

function eventClick(idImovel) {
  window.location.href = `moveis.html?id=${idImovel}`;
}

function imovelFavorito(id) {
  const imovelFavorito = document.getElementById(`imovelFavorito${id}`);
  const colorFavorito = imovelFavorito.style.color;

  if (colorFavorito == "red") {
    imovelFavorito.style.color = "rgba(255, 255, 255, 0.7)";
  } else {
    imovelFavorito.style.color = "red";
    maskMenu.style.visibility = "visible";
    maskMenu.classList.add("maskMenuBg");
    favoritoBoxLeadId.style.visibility = "visible";
  }
}

var contadorInter = "";

function orderOptions(event) {
  if (containerOrder.classList.value === "ContainerOrder") {
    containerOrder.classList.add("openFiltros");
    iconExpand.innerHTML = "expand_less";
    contadorInter = 0;
    visibleOrder("visible", 500);
  } else {
    contadorInter = 1;
    visibleOrder("hidden", 0);
    containerOrder.classList.remove("openFiltros");
    iconExpand.innerHTML = "expand_more";
  }
}

function visibleOrder(value, time) {
  const boxOrderFiltroOptions = document.getElementById(
    "boxOrderFiltroOptions"
  );
  const boxOrderFiltroOptions2 = document.getElementById(
    "boxOrderFiltroOptions2"
  );
  const boxOrderFiltroOptions3 = document.getElementById(
    "boxOrderFiltroOptions3"
  );
  const boxOrderFiltroOptions4 = document.getElementById(
    "boxOrderFiltroOptions4"
  );

  if (contadorInter > 0) {
    boxOrderFiltroOptions.style.visibility = value;
    boxOrderFiltroOptions2.style.visibility = value;
    boxOrderFiltroOptions3.style.visibility = value;
    boxOrderFiltroOptions4.style.visibility = value;
  } else {
    var interval = setInterval(function () {
      boxOrderFiltroOptions.style.visibility = value;
      boxOrderFiltroOptions2.style.visibility = value;
      boxOrderFiltroOptions3.style.visibility = value;
      boxOrderFiltroOptions4.style.visibility = value;
      clearInterval(interval);
    }, time);
  }
}
