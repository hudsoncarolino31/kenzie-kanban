class Interface {
    constructor(){
        this._idSecao = 0
        this._idCard  = 0
        this._workspace = []
    }

    init(){
        this.criarWorkspace(0,"Kenzie Kanban")
        this.criaSecao(this._idSecao,"Todo")
        this.imprimirSecoes()
    }
    criarWorkspace(idWorkSpace,nameWorkspace){
    
        const workspace = new Workspace(idWorkSpace,nameWorkspace)
        this._workspace.push(workspace)

    }

    criaSecao(idSecao,nomeSecao){
        
        const secao = new Secao(idSecao,nomeSecao)
        this._workspace[0].adicionarSecao(secao)
        this._idSecao++

    }

    getSecoes(){
        return this._workspace[0].secoes
    }

    imprimirSecoes(){
        const quadro = document.querySelector("app_secoes")
        const secoes = this.getSecoes()

        secoes.forEach(appSecoes)
    }

    criaCard(idCard,nomeCard,descricaoCard,idSecao){
        const card = new Card(idCard,nomeCard,descricaoCard)
        this._workspace[0].secoes[idSecao].adicionarCard(card)
        templateCards(card,idSecao)
        this._idCard++
    }


}
const quadro = new Interface()
quadro.init()


function salvarCard(e) {
        
    const secaoId = e.target.id
    const appSecaoFooter = e.target.parentElement
    const input  = appSecaoFooter.querySelector("input").value
    const textarea = appSecaoFooter.querySelector("textarea").value
  
    const bindedCriaCard =  quadro.criaCard.bind(quadro)
    bindedCriaCard(quadro._idCard,input,textarea,secaoId)

}










const botaoAddCard = document.querySelectorAll(".app_secao_footer > button")
botaoAddCard.forEach(adicionarEventoAdd)
function adicionarEventoAdd(elemento) {
    elemento.addEventListener('click' ,function(e) {
        e.target.nextElementSibling.classList.toggle("hidden") 
    })
}

const botaoSalvarCard = document.querySelectorAll(".app_secao_footer_salvar_card")
botaoSalvarCard.forEach(adicionarEventoSalvar)
function adicionarEventoSalvar(elemento) {
    elemento.addEventListener('click' , salvarCard)
}


