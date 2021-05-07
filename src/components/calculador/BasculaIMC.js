
import React from 'react'
import { Image } from 'react-bootstrap';
function BasculaIMC({bascula}) {
    return (
        <article>
     {/*    <p style={{ color: this.props.color}}>
           Calculo de indice de masa corporal IMC 
        </p> */}
        <Image style={{width:'150px'}} src={bascula} alt="imagen corporal"/>
        </article>
    )
}

export default BasculaIMC
