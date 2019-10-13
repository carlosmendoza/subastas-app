import React, {useEffect, useRef} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import SubirSubasta from './SubirSubasta';
import NavBar from './NavBar';
import ListaSubastas from './ListaSubastas';
import {Meteor} from 'meteor/meteor';
import {Subastas} from '../api/subastas.js';
import ReactDOM from 'react-dom'


const App = (props) => {
  const listasubastas = useRef();
  const listacompras = useRef();
  const listaventas = useRef();
  
 
  function buttonComprasPressed(){
    
    listasubastas.current.style.display!='none'?listasubastas.current.style.display = 'none':true;
    listaventas.current.style.display!='none'?listaventas.current.style.display = 'none':true;
    listacompras.current.style.display=='none'?listacompras.current.style.display = 'inline':true;
    
  }
 
  

  function buttonVentasPressed(){
    
    listasubastas.current.style.display!='none'?listasubastas.current.style.display = 'none':true;
    listacompras.current.style.display!='none'?listacompras.current.style.display = 'none':true;
    listaventas.current.style.display=='none'?listaventas.current.style.display = 'inline':true;
    
  }
  const buttonTodosPressed = ()=>{
    
    listasubastas.current.style.display=='none'?listasubastas.current.style.display = 'inline':true;
    listaventas.current.style.display!='none'?listaventas.current.style.display = 'none':true;
    listacompras.current.style.display!='none'?listacompras.current.style.display = 'none':true;
    
  }
  

  return(
  <div className="container">
    <NavBar></NavBar>
    <br></br>
    {Meteor.user()? (<h1 >Bienvenido { props.usuario.username}</h1>)
    :(<div>Por favor ingresa</div>)}
    <button className="btn btn-primary" onClick={buttonComprasPressed}>Mis Compras</button><span>{" "}</span>
    <button className="btn btn-primary" onClick={buttonVentasPressed}>Mis Ventas</button><span>{" "}</span>
    <button className="btn btn-primary" onClick={buttonTodosPressed}>Todas las Subastas</button>
    <SubirSubasta id="subirsubasta" usuario={props.usuario} ></SubirSubasta>
    
    <br></br>
    
    <div ref={listasubastas}>
    <h1>Lista de subastas</h1>
      <ListaSubastas id="listasubastas"  subastas={props.subastas} usuario={props.usuario}>
      </ListaSubastas>
    <br></br>
    </div>
    
    <div ref={listacompras} className="listacompras">
    <h1>Lista de compras</h1>
      <ListaSubastas className="listacompras" id="listacompras" subastas={props.compras} usuario={props.usuario}>
      </ListaSubastas>
    <br></br>
    </div>
    
    <div ref={listaventas} className="listaventas">
      <h1>Lista de ventas</h1>
      <ListaSubastas className="listaventas" id="listaventas" subastas={props.ventas} usuario={props.usuario}>
      </ListaSubastas>
    </div>
    
    
  </div>)
};

const wT1=()=>{
  Meteor.subscribe("subastas");
  if(Meteor.user())
  {
  return{
    usuario: Meteor.user(),
    subastas: Subastas.find({}).fetch(),
    ventas: Subastas.find({dueño:Meteor.user().username}).fetch(),
    compras: Subastas.find({ganador:Meteor.user().username}).fetch()

  }
}
else{
  return{
    usuario: Meteor.user(),
    subastas: Subastas.find({}).fetch(),
    

  }
}
}



export default withTracker(wT1) (App);
