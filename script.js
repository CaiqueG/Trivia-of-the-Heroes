var h1 = {
  nome: 'Homen de Ferro',
  imagem: "https://m.media-amazon.com/images/I/81zMosRDpdL._SX450_.jpg",
  opcoes:{
    opção1: 'Homen de Ferro',
    opção2: 'Capitão América',
    opção3: 'Thor'
  },
  respostaCerta: "opção1"
} // cria-se os objetos que serão os Herois

var h2 = {
  nome: 'Capitão América',
  imagem: "http://pm1.narvii.com/7196/99eb1fb07e1bf9ff92e3b6ce6cff6a34825a8ba6r1-469-832v2_uhq.jpg",
  opcoes:{
    opção1: 'Homen de Ferro',
    opção2: 'Capitão América',
    opção3: 'Thor'
  },
  respostaCerta: "opção2"
}

var h3 = {
  nome: 'Thor',
  imagem: "https://www.einerd.com.br/wp-content/uploads/2019/06/thor-4-e1560859709715.jpg",
  opcoes:{
    opção1: 'Homen de Ferro',
    opção2: 'Capitão América',
    opção3: 'Thor'
  },
  respostaCerta: "opção3"
}

var h4 = {
  nome: 'Hulk',
  imagem: "https://i.pinimg.com/originals/49/59/1f/49591fe9d1e201489f09aeab79cc6415.jpg",
  opcoes:{
    opção1: 'Homen de Ferro',
    opção2: 'Hulk',
    opção3: 'Thor'
  },
  respostaCerta: "opção2"
}

var h5 = {
  nome: 'Viuva Negra',
  imagem: "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2021/04/03161447/Viuva-Negra.jpg?fit=1200%2C675&ssl=1",
  opcoes:{
    opção1: 'Viuva Negra',
    opção2: 'Feiticeira Escarlate',
    opção3: 'Gamora'
  },
  respostaCerta: "opção1"
}

var h6 = {
  nome: 'Feiticeira Escarlate',
  imagem: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/08/tudo-o-que-sabemos-sobre-wandavision-serie-da-feiticeira-escarlate.jpg",
  opcoes:{
    opção1: 'Viuva Negra',
    opção2: 'Feiticeira Escarlate',
    opção3: 'Gamora'
  },
  respostaCerta: "opção2"
}

var h7 = {
  nome: 'Gamora',
  imagem: "http://pm1.narvii.com/6838/18a03029be32259bfdf95e1134305031b3aab17cv2_00.jpg",
  opcoes:{
    opção1: 'Viuva Negra',
    opção2: 'Feiticeira Escarlate',
    opção3: 'Gamora'
  },
  respostaCerta: "opção3"
}

var placar = 0   // placar zerado no inicio
atualizaPlacar()   //chama a função que vai atualizar o placar tova vez que acertar o heroi

var adivinhar
var herois = [h1, h2, h3, h4, h5, h6, h7]  // array com todos os herois

function sortearHeroi(){    
  if (herois.length > 0){    //caso ainda tenha herois no array ele continua sorteando
  var numeroHeroi = parseInt(Math.random() * herois.length) //sorteia aleatoriamente um heroi do array
  adivinhar = herois[numeroHeroi]
  herois.splice(numeroHeroi, 1)  // retira do array o heroi que foi sorteado
  exibirImagens()               // chama a função que vai exibir a imagem do heroi
  }
  else{
    alert('Fim de Jogo!')               // quando acaba-se os herois o jogo termina 
    document.getElementById("b2").disabled = true;    // desabilita o botão de jogar
    resultado.innerHTML = "Resultado Final: Pontuação = " + placar
  }
}

function exibirImagens(){
  var divImagemHeroi = document.getElementById("imagem-heroi")  // escolhe a div em que a imagem vai aparecer
  var opcoes = document.getElementById('opcoes') // escolhe a div em que as opçoes vão aparecer
  var opcoesTexto = ""
  for (var opcao in adivinhar.opcoes){
    opcoesTexto += "<input type='radio' name='opcao' value='" + opcao +  "'>" + " " + adivinhar.opcoes[opcao] + "<br>"
  }
  opcoes.innerHTML = opcoesTexto     //exibi as opções
  divImagemHeroi.style.backgroundImage=`url(${adivinhar.imagem})`     //exibi as imagens
}

function obtemOpcaoSelecionada() {
  var radioOpcao = document.getElementsByName('opcao')  
  for (var i = 0; i < radioOpcao.length; i++){
    if(radioOpcao[i].checked){             //quando a opcao é selecionada na tela
      return radioOpcao[i].value
      
    }
  }
}

function escolheHeroi(){
  var heroiEscolhido = obtemOpcaoSelecionada()        // a opão que foi selecionada anteriormente é comparada com a resposta certa
  if (heroiEscolhido == adivinhar.respostaCerta){           // se estiver certa adiciona 1 ponto ao placar
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Você Acertou!"
    placar++
    atualizaPlacar()
    sortearHeroi()                      //sorteia mais um heroi
  }
  else{
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Você Errou!"
    sortearHeroi()
  }
}

function atualizaPlacar(){        //atualiza o placar
  var divPlacar = document.getElementById('placar')
  var html = "Pontuação: " + placar 
  divPlacar.innerHTML = html      
}
