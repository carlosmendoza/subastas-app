import React, {useState, useRef} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import SubirSubasta from './SubirSubasta';
import ListaSubastas from './ListaSubastas';
import {Meteor} from 'meteor/meteor';
import {Subastas} from '../api/subastas.js';


const App = (props) => {
  
  return(
  <div className="container">
   
    <SubirSubasta></SubirSubasta>
    <ListaSubastas subastas={props.subastas}>

    </ListaSubastas>
    
  </div>)
};

const wT1=()=>{
  Meteor.subscribe("subastas");
  return{
    subastas: Subastas.find({}).fetch()
  }
}

export default withTracker(wT1) (App);
