

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
console.log(criarKanban("Trello Kenzie","Backlog","Deploy","Fazer deploy git")
)

