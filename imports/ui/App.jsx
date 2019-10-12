import React, {useState, useRef} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import SubirSubasta from './SubirSubasta';
import NavBar from './NavBar';
import ListaSubastas from './ListaSubastas';
import {Meteor} from 'meteor/meteor';
import {Subastas} from '../api/subastas.js';


const App = (props) => {
  

  return(
  <div className="container">
    <NavBar></NavBar>
    {Meteor.user()? (<div>Bienvenido { props.usuario.username}</div>)
    :(<div>Por favor ingresa</div>)}
    
    <SubirSubasta usuario={props.usuario} ></SubirSubasta>
    <ListaSubastas subastas={props.subastas} usuario={props.usuario}>

    </ListaSubastas>
    
  </div>)
};

const wT1=()=>{
  Meteor.subscribe("subastas");
  return{
    usuario: Meteor.user(),
    subastas: Subastas.find({}).fetch()
  }
}

export default withTracker(wT1) (App);
