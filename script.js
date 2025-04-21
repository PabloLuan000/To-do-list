var atividade = document.getElementById("atividade");
var dataAtv = document.querySelector("#DataAtv");
var btnCadastrar = document.querySelector('#Cadastrar');

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault(); // Evita recarregar a página

    let lista = document.getElementById("lista");

    let linha = document.createElement("tr");
    let celID = document.createElement("th");
    let celAtv = document.createElement("td");
    let celData = document.createElement("td");
    let celAcao = document.createElement("td");

    // Preenchendo as células
    celID.innerText = lista.children.length + 1;
    celAtv.innerText = atividade.value;
    celData.innerText = dataAtv.value;

    // Checkbox na ação
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    celAcao.appendChild(checkbox);

    // Montando a linha
    linha.appendChild(celID);
    linha.appendChild(celAtv);
    linha.appendChild(celData);
    linha.appendChild(celAcao);

    lista.appendChild(linha);

    // Limpando os campos
    atividade.value = '';
    dataAtv.value = '';
});

var btnResetar = document.querySelector("#Resetar");

btnResetar.addEventListener("click", () => {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // limpa todas as linhas da tabela
});

