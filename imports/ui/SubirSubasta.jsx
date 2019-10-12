import React, {useState, useRef} from 'react';
import {Meteor} from 'meteor/meteor';



const SubirSubasta = () => {
  const [nombre, setNombre] =useState("");
  const [descripcion, setDescripcion] =useState("");
  const [monto, setMonto] =useState("");
  const handleChangeNombre =(evt)=>{
    setNombre(evt.target.value);
  }
  const handleChangeDescripcion =(evt)=>{
    setDescripcion(evt.target.value);
  }
  const handleChangeMonto =(evt)=>{
    setMonto(evt.target.value);
  }
  const inRef = useRef();
  const buttonPressed = ()=>{
    Meteor.call("subastas.insert", nombre,descripcion,monto, (err,res)=>{
      if (err) {setErr(err); return;}
      inRef.current.value="";
      console.log("Added",nombre);
    })
  }




  return(
  <div >
    <br></br>
    <form className="subasta3">

    <div className="form-group">
      <label htmlFor="nombreProducto">Nombre del producto:</label>
      <input value={nombre}  onChange={handleChangeNombre} type="text" className="form-control" id="nombreProducto" />
    </div>
    
 
  <div className="form-group ">
    <label htmlFor="descripcion">Descripción:</label>
    <input value={descripcion} onChange={handleChangeDescripcion} type="text" className="form-control" id="descripcion" />
  </div>
  <div className="form-group">
  <label htmlFor="aumento">Monto minimo de aumento:</label>
    <input value={monto} onChange={handleChangeMonto} type="text" className="form-control" id="aumento" />
  </div>
  
  <button className="btn btn-primary" onClick={buttonPressed}>Agregar</button>
</form>
    
  </div>
  )
};

export default SubirSubasta;
