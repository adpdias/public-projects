import React from "react";
import { actions } from "../actions/frutas.action";
import { useDispatch } from "react-redux";

const Fruta = ({ fruta }) => {
    const dispatch = useDispatch();

    return (
        <div className="fruta">
            <ul>
                <li><strong>{fruta.nome}</strong></li>
                <li><strong>Quantidade: {fruta.quantidade}</strong></li>                 
            </ul>
            <button onClick={() => dispatch(actions.remover(fruta))}>Remover</button>
        </div>
    );
}

export default Fruta;