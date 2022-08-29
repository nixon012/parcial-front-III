
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import app from "../App";
import React from "react";
import {useState} from "react";

function Item(props){

  const nombre=props.nombre
  const descripcion=props.descripcion
  const stock= parseInt(props.stock)



  const [stockState,setStockState]= useState(parseInt(stock));

  function comprobarStock(cant){
    props.updateHedder()
    if (cant <=1){
      return ("agotado")
      } else {return (cant-1)}
    }

  function Boton(stk){
    if (typeof stk!='string'){return(false)}
      else {return (true)}
  }

  function NombrerBoton(stk){
    if (typeof stk!='string'){return("comprar")}
    else {return ("sin stock")}
  }


  return (
    <div className='producto'>
      {<h3>{nombre} </h3>}
      {<p> {descripcion}</p>}
      {<h5> En stock <span>{stockState}</span> </h5>}
        {<button disabled={Boton(stockState)} onClick={()=>setStockState(comprobarStock(stockState))}>{NombrerBoton(stockState)}</button>}
      </div>
  )
}



export default Item;