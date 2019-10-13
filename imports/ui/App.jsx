import React, {useEffect, useRef} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import SubirSubasta from './SubirSubasta';
import NavBar from './NavBar';
import ListaSubastas from './ListaSubastas';
import {Meteor} from 'meteor/meteor';
import {Subastas} from '../api/subastas.js';
import ReactDOM from 'react-dom'


const App = (props) => {

  const inRef = useRef();
  const buttonComprasPressed = ()=>{
    document.getElementById('subirsubasta')? console.log("lo encontró"): console.log("No lo encontró");
    
  }
  useEffect(buttonComprasPressed)
  

  const buttonVentasPressed = ()=>{
    
    
  }
  const buttonTodosPressed = ()=>{
    
    
  }
  

  return(
  <div className="container">
    <NavBar></NavBar>
    {Meteor.user()? (<h1>Bienvenido { props.usuario.username}</h1>)
    :(<div>Por favor ingresa</div>)}
    <button onClick={buttonComprasPressed}>Compras</button>
    <button onClick={buttonVentasPressed}>Ventas</button>
    <button onClick={buttonTodosPressed}>Todos</button>
    <SubirSubasta id="subirsubasta" usuario={props.usuario} ></SubirSubasta>
    
    <br></br>
    <h1>Lista de subastas</h1>

    <ListaSubastas id="listasubastas" subastas={props.subastas} usuario={props.usuario}>
    </ListaSubastas>
    <br></br>
    
    <h1>Lista de compras</h1>
   
    <ListaSubastas id="listacompras" subastas={props.compras} usuario={props.usuario}>
    </ListaSubastas>
    <br></br>
    
    <h1>Lista de ventas</h1>
   
    <ListaSubastas id="listaventas" subastas={props.ventas} usuario={props.usuario}>
    </ListaSubastas>
    
    
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
