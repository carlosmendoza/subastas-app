import React from 'react'
import Subasta from './Subasta'

const ListaSubastas = (props) => {
    if(props.usuario)
    {
    return (<div className="grilla">
        {props.subastas.map((p,i)=>(<Subasta  key={i} c={i} valor_actual={p.valor_actual} nombre={p.nombre} descripcion={p.descripcion} monto={p.monto} usuario={props.usuario.username} ganador={p.ganador} dueño={p.dueño}></Subasta>))}
    </div>)
    }
    else{
        return (<div className="grilla">
        {props.subastas.map((p,i)=>(<Subasta  key={i} c={i} valor_actual={p.valor_actual} nombre={p.nombre} descripcion={p.descripcion} monto={p.monto} usuario={"Sin usuario"} ganador={p.ganador} dueño={p.dueño}></Subasta>))}
        </div>)
    }
}

export default ListaSubastas;