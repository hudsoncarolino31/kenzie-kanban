class Workspace{
    constructor(id,nome){
        this._id     = id;
        this._nome   = nome;
        this._secoes = [];
        this._idSecao = 1
    }

    set nome(nome){
        this._nome = nome
    }

    get  nome(){
        return this._nome 
    }

    get secoes(){
        return this._secoes
    }

    adicionarSecao(secao){
        secao.id = this._idSecao
        this._secoes.push(secao)
        this._idSecao++
    }

    removerSecao(posicao){
        this._secoes.splice(posicao,1)
    }

}

