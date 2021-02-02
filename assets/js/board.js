class Board{
    constructor(id,nome){
        this._id     = id;
        this._nome   = nome;
        this._secoes = [];
    }

    set nome(nome){
        this._nome = nome
    }

    get  nome(){
        return this._nome 
    }

    adicionarSecao(secao){
        this._secoes.push(secao)
    }

    removerSecao(posicao){
        this._secoes.splice(posicao,1)
    }
}

