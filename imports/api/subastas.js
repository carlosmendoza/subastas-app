import { Mongo } from 'meteor/mongo';
import {Meteor} from 'meteor/meteor'

export const Subastas = new Mongo.Collection('subastas');
if(Meteor.isServer){
    Meteor.publish("subastas",()=>{
        return Subastas.find({});
    })
}
Meteor.methods({
    "subastas.insert"(nombre,descripcion,monto)
    {
        Subastas.upsert({
            nombre
        }, {
            nombre,
            descripcion,
            monto,
            valor_actual:0

        });
    },

    "subastas.pujar"(nombre,monto)
    {
        Subastas.update({
            nombre
        }, {
            $set:{
                valor_actual:monto
            }
            

        });
    }
})