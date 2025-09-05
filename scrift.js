let chave="7f267cf6130eb9a94f198d2f5bb46f57"
function clique(){
    let cidade = document.querySelector
}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function burcarCidade(cidade) {
    let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+
    cidade+
    "8appid="+
    chave)
    .then(res =>res.json())
    console.log(dados);
    
}