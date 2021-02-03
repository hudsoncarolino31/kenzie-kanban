
const app_secoes   = document.querySelector(".app_secoes")

/************************** 
CRIAR SEÇÃO
***************************/
function appSecoes(secao){
    
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
    app_secoes.appendChild(appsecao)

    return appsecao
}
//appSecoes()

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
function templateCards(card,idSecao) {
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


























