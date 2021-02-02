class Card{
    constructor(id,nome,descricao,idSecao){
        this._id        = id;
        this._nome      = nome;
        this._descricao = descricao;
        this._idSecao   = idSecao;
    }

    get  nome(){
        return this._nome
    }

    set descricao(descricao){
        this._descricao = descricao
    }

    get  descricao(){
       return this._descricao
    }

    get  idSecao(){
        return this._idSecao
    }
}