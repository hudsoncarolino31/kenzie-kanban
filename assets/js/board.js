class Board{
    constructor(id,nome,secoes){
        this._id     = id;
        this._nome   = nome;
        this._secoes = secoes;
    }

    set nome(nome){
        this._nome = nome
    }

    get  nome(nome){
        this._nome = nome
    }

    adicionarSecao(secao){
        this._secoes.push(secao)
    }

    removerSecao(posicao){
        this._secoes.splice(posicao,1)
    }
}