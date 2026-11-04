import React from "react";
import { formatRelative } from "date-fns";
import './Comentario.css';
import imagemUsuario from './user.png';
import { ptBR } from "date-fns/locale";

const Comentario = props => {
    return <div className="Comentario">
        <img class="avatar" src={imagemUsuario} alt={props.nome} />
        <div class="conteudo">
            <p class="nome">{props.nome}</p>
            <p class="email">{props.email}</p>
            <p class="mensagem">{props.mensagem}</p>
            <p class="data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
};

export default Comentario;