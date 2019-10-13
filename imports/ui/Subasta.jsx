import React, {useState, useRef} from 'react';
import {Meteor} from 'meteor/meteor';



const Subasta = (props) => {
    const [valor_puja, setValorActual] =useState("");
    const handleChangeValor =(evt)=>{
        setValorActual(evt.target.value);
    }
    const inRef = useRef();
    const buttonPressed = ()=>{
        if(props.usuario!="Sin usuario")
        {
            if(valor_puja>props.valor_actual  && (valor_puja-props.valor_actual)>=props.monto)
            {
                Meteor.call("subastas.pujar", props.nombre,props.usuario,valor_puja, (err,res)=>{
                if (err) {setErr(err); return;}
                inRef.current.value="";
                })
            }
            else{
                console.log("NO CUMPLE LAS CONDICIONES DE LA SUBASTA",valor_puja-props.valor_actual," monto ",props.monto.type)
            }
        }
      }


    
    return(
        <div className="subasta">
          
          <form >
            <div className="form-group">
                <label htmlFor="dueño">Dueño:</label>
                <input value={props.dueño} type="text" className="form-control" id="dueño" readOnly />
            </div> 
            <div className="form-group">
                <label htmlFor="nombreProducto">Nombre del producto:</label>
                <input value={props.nombre} type="text" className="form-control" id="nombreProducto" readOnly />
            </div>      
            <div className="form-group ">
                <label htmlFor="descripcion">Descripción:</label>
                <input value={props.descripcion} type="text" className="form-control" id="descripcion" readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="aumento">Monto minimo de aumento:</label>
                <input value={props.monto} type="text" className="form-control" id="aumento" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="actual">Valor actual:</label>
                <input value={props.valor_actual} type="text" className="form-control" id="actual" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="gandoractual">Ganador actual:</label>
                <input value={props.ganador} type="text" className="form-control" id="ganadoractual" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="valoroferta">Valor oferta:</label>
                <input value={valor_puja} type="number" className="form-control" id="valoroferta" onChange={handleChangeValor}/>
                
                
            </div>
            
                
            
            
          </form>
          <button className="btn btn-primary col-12" onClick={buttonPressed}>Pujar</button>
          
        </div>
        )
    
    
    
};

export default Subasta;
