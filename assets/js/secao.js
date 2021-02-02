class Secao{
    constructor(id,nome){
        this._id    = id;
        this._nome  = nome;
        this._cards = [];
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