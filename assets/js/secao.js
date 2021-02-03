class Secao{
    constructor(nome){
        this._id    = 0;
        this._nome  = nome;
        this._cards = [];
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get nome(){
        return this._nome
    }
    
    set nome(nome){
        this._nome = nome
    }

    get cards(){
        return this._cards
    }

    adicionarCard(card){
        this._cards.push(card)
    }

    removerCard(posicao){
        this._cards.splice(posicao,1)
    }

    quantidadeCards(){
        return this._cards.length
    }

}