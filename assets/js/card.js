class Card{
    constructor(id,nome,descricao){
        this._id        = id;
        this._nome      = nome;
        this._descricao = descricao;
        this._idSecao   = 0;
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

    set  idSecao(idSecao){
        this._idSecao = idSecao
    }

    get  idSecao(){
        return this._idSecao
    }

}



