import React, {useState, useRef} from 'react';
import {Meteor} from 'meteor/meteor';



const Subasta = (props) => {
    const [valor_puja, setValorActual] =useState("");
    const handleChangeValor =(evt)=>{
        setValorActual(evt.target.value);
    }
    const buttonPressed = ()=>{
        Meteor.call("subastas.pujar", props.nombre,valor_puja, (err,res)=>{
          if (err) {setErr(err); return;}
          inRef.current.value="";
          
        })
      }


    if(props.c%2==0)
    {console.log("Mayor a 0");
    return(
        <div >
          <br></br>
          <form className="subasta">
            <div className="form-group">
                <label for="nombreProducto">Nombre del producto:</label>
                <input value={props.nombre} type="text" className="form-control" id="nombreProducto" readOnly />
            </div>      
            <div className="form-group ">
                <label for="descripcion">Descripción:</label>
                <input value={props.descripcion} type="text" className="form-control" id="descripcion" readOnly />
            </div>
            <div className="form-group">
                <label for="aumento">Monto minimo de aumento:</label>
                <input value={props.monto} type="text" className="form-control" id="aumento" readOnly/>
            </div>
            <div className="form-group">
                <label for="actual">Valor actual:</label>
                <input value={props.valor_actual} type="text" className="form-control" id="actual" readOnly/>
            </div>
            <div className="form-row">
                <div className="col-8">
                <input value={valor_puja} type="text" className="form-control"  onChange={handleChangeValor}/>
                </div>
                <div className="col">
                <button className="btn btn-primary" onClick={buttonPressed}>Pujar</button>
                </div>
            </div>
            
          </form>
          
        </div>
        )
    }
    else{
        return(
            
                <div >
                  <br></br>
                  <form className="subasta2">
                    <div className="form-group">
                        <label for="nombreProducto">Nombre del producto:</label>
                        <input value={props.nombre} type="text" className="form-control" id="nombreProducto" readOnly />
                    </div>      
                    <div className="form-group ">
                        <label for="descripcion">Descripción:</label>
                        <input value={props.descripcion} type="text" className="form-control" id="descripcion" readOnly />
                    </div>
                    <div className="form-group">
                        <label for="aumento">Monto minimo de aumento:</label>
                        <input value={props.monto} type="text" className="form-control" id="aumento" readOnly/>
                    </div>
                    <div className="form-group">
                        <label for="actual">Valor actual:</label>
                        <input value={props.valor_actual} type="text" className="form-control" id="actual" readOnly/>
                    </div>
                    <div className="form-row">
                    <div className="col-8">
                        <input value={valor_puja} type="text" className="form-control"  onChange={handleChangeValor}/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={buttonPressed}>Pujar</button>
                    </div>
                 </div>
                  </form>
                  
                </div>
                )
            
    }
    
};

export default Subasta;
