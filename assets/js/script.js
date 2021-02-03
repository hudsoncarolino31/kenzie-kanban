
const workspaceKenzie = new Workspace(1,"Kenzie")
const workspaceSesecao = new Secao("Todo")
const card = new Card(1,"Fazer","Descrica")
workspaceSesecao.adicionarCard(card)
workspaceKenzie.adicionarSecao(workspaceSesecao)

// -----------------------------------//
// ADICIONA SECÃO
// -----------------------------------//
const appsecoes = document.querySelector(".app_secoes")

workspaceKenzie.secoes.forEach(imprimirSecoes)
function imprimirSecoes(secao){
    
    const secaoNome = secao.nome
    const secaoId   = secao.id

    const header = appSecaoHeader(secaoNome)
    const footer = appSecaoFooter(secaoId)

    const appsecao = document.createElement("div")
    appsecao.classList.add("app_secao")
    appsecao.dataset.id = secaoId

    const listaCards = document.createElement("ul")

    /************************** 
    SEÇÃO - LISTA DE CARDS
    ***************************/
    appsecao.appendChild(header)
    appsecao.appendChild(listaCards)
    appsecao.appendChild(footer)
    appsecoes.appendChild(appsecao)

    adicionarControles()
}

const appbuttonaddsecao = document.querySelector(".app_input_add_secao")
const appContainerInput = document.querySelector(".app_container_add_secao>input")
appbuttonaddsecao.addEventListener("click", adicionarNovaSecao)
function adicionarNovaSecao() {

    const workspaceNovaSesecao = new Secao(appContainerInput.value)
    workspaceKenzie.adicionarSecao(workspaceNovaSesecao)
    imprimirSecoes(workspaceNovaSesecao)

    
}

// -----------------------------------//
// ADICIONA CARDS
// -----------------------------------//

function salvarCard(e) {
      
    const secaoId = e.target.id
    const appSecaoFooter = e.target.parentElement
    const input  = appSecaoFooter.querySelector("input").value
    const textarea = appSecaoFooter.querySelector("textarea").value

    const card = new Card(secaoId,input,textarea)
    workspaceKenzie.adicionarCard(secaoId,card)
   
    templateCards(secaoId,card)
}











// -----------------------------------//
// CONTROLES
// -----------------------------------//
function adicionarControles(){
    const botaoAddCard = document.querySelectorAll(".app_secao_footer > button")
    botaoAddCard.forEach(adicionarEventoAdd)

    const botaoSalvarCard = document.querySelectorAll(".app_secao_footer_salvar_card")
    botaoSalvarCard.forEach(adicionarEventoSalvar)
}

function adicionarEventoAdd(elemento) {
    elemento.removeEventListener('click' ,adicionarAbrirCard)
    elemento.addEventListener('click' ,adicionarAbrirCard)
}

function adicionarAbrirCard(e) {
    e.target.nextElementSibling.classList.toggle("hidden") 
}

function adicionarEventoSalvar(elemento) {
    elemento.removeEventListener('click' , salvarCard)
    elemento.addEventListener('click' , salvarCard)
}


/************************** 
SEÇÃO - CRIA HEADER
***************************/
function appSecaoHeader(secaoNome){
    
    const appSecaoHeader = document.createElement("div")
    appSecaoHeader.classList.add("app_secao_header")

    const input = document.createElement("input")
    input.value = secaoNome
    input.type  = "text"
    input.placeholder = "Nome seção"
    appSecaoHeader.appendChild(input)
    
    return appSecaoHeader
}

/************************** 
SEÇÃO - CARDS
***************************/
function templateCards(idSecao,card) {
    const secao = document.querySelector(`.app_secao[data-id="${idSecao}"] ul`)
    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    h2.innerText = card.nome
    const p  = document.createElement("p")
    p.innerText = card.descricao
    li.appendChild(h2)
    li.appendChild(p)

    secao.appendChild(li)
}

/************************** 
SEÇÃO - FOOTER 
***************************/
function appSecaoFooter(secaoId){
    const appSecaoFooter = document.createElement("div")
    appSecaoFooter.classList.add("app_secao_footer")

    const templateFooter = `<button>Adicionar novo card</button>
    <div class='app_secao_footer_card hidden'>
    <input type='text' name='tituloCard' placeholder='Título do card'>
    <textarea placeholder='Descrição' name='descricaoCard' id='descricaoCard' value='Descrção do card'></textarea>
    <button class='app_secao_footer_salvar_card' id='${secaoId}'>Add</button></div>`
    appSecaoFooter.innerHTML = templateFooter
    return appSecaoFooter
}


const appButtonabrirSecao = document.querySelector('.app_add_secao .app_button_add_secao');
const appContainerAddSecao = document.querySelector('.app_add_secao .app_container_add_secao');
appButtonabrirSecao.addEventListener('click', function(){
    appContainerAddSecao.classList.toggle('hidden');
})

