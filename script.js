let chave = "7f267cf6130eb9a94f198d2f5bb46f57"

function clique(){
    let cidade = document.querySelector(".input-cidade").value 
    
    buscarCidade(cidade);
}
function  clique() {
  var cidade = document.getElementById("cidade").value;
  if (cidade === '') {
    alert("Por favor, digite o nome da cidade antes de pesquisar!");
  } else {
    buscarCidade(cidade);
    // Coloque aqui sua lógica de pesquisa
    // Exemplo: pesquisarCidade(cidade);
  }
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function buscarCidade(cidade)  {
       let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+
    cidade+
   "&appid="+
   chave +
   "&lang=pt_br" +
   "&units=metric")
    .then(res =>res.json())

    console.log(dados);
    colocaNaTela(dados);}

    function colocaNaTela(dados){
    document.querySelector(".nome-cidade") .innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = dados.main.temp + "°C";
    document.querySelector(".descrição").innerHTML = "Descrição: " + dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}




