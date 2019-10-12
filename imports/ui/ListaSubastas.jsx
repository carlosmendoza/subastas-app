import React from 'react'
import Subasta from './Subasta'

const ListaSubastas = (props) => {
    return (<div className="grilla">
        {props.subastas.map((p,i)=>(<Subasta  key={i} c={i} valor_actual={p.valor_actual} nombre={p.nombre} descripcion={p.descripcion} monto={p.monto}></Subasta>))}
    </div>)
}

export default ListaSubastas;