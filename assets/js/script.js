
const app_secoes = document.querySelector(".app_secoes")

/************************** 
CRIAR SEÇÃO
***************************/
function appSecoes(){
    const appsecao = document.createElement("div")
    appsecao.classList.add("app_secao")
   
    const header = appSecaoHeader()
    
    /************************** 
    SEÇÃO - LISTA DE CARDS
    ***************************/
    const listaCards = document.createElement("ul")
    const li = templateCards()
    listaCards.appendChild(li)

    const footer = appSecaoFooter()

    appsecao.appendChild(header)
    appsecao.appendChild(listaCards)
    appsecao.innerHTML = footer
    app_secoes.appendChild(appsecao)
}
appSecoes()

/************************** 
SEÇÃO - CRIA HEADER
***************************/
function appSecaoHeader(){
    
    const appSecaoHeader = document.createElement("div")
    appSecaoHeader.classList.add("app_secao_header")

    const input = document.createElement("input")
    input.type = "text"
    input.placeholder = "Nome seção"
    appSecaoHeader.appendChild(input)
    
    return appSecaoHeader
}

/************************** 
SEÇÃO - CARDS
***************************/
function templateCards() {
    
    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    const p  = document.createElement("p")
    li.appendChild(h2)
    li.appendChild(p)
    return li
}

/************************** 
SEÇÃO - FOOTER 
***************************/
function appSecaoFooter(){
    const templateFooter = "<div class=1app_secao_footer1>"+ 
    "<button>Adicionar novo card</button>"+
    "<div class='app_secao_footer_card'>"+
    "<label for='tituloCard'>Título do card</label>"+
    "<input type='text' name='tituloCard' id='tituloCard' placeholder='Título do card'>"+
    "<label for='descricaoCard'>Descrção do card</label>"+
    "<textarea name='descricaoCard' id='descricaoCard' value='Descrção do card'></textarea>"+
    "<button class='app_secao_footer_salvar_card'></button></div></div>"
    return templateFooter
}





























let ids = 0
function criarKanban(nomeBoard, nomeSecao,nomeCard,descricaoCard){

    // 1 - BOARD 
    // 2 - SEÇÃO 
    // 3 - CARD
    
    const trello = new Board(ids,nomeBoard)
    const secao  = new Secao(ids,nomeSecao)
    const card   = new Card(ids,nomeCard,descricaoCard)

    card.idSecao = secao._id
    secao.adicionarCard(card)
    trello.adicionarSecao(secao)
    ids++

    return trello
}
//console.log(criarKanban("Trello Kenzie","Backlog","Deploy","Fazer deploy git"))

