import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { CabeceraCalulo } from './CabeceraCalulo';
import CuerpoCalculo from './CuerpoCalculo';

export default class CalculadorApp extends Component {
    
    constructor(){
        super()
        this.state = {
            paciente:'pedro'
        }
      
    }  
    obtenerNombre(){
        return this.nombre
    }

    render() {
        return (
            <>
          <Card>
            <CabeceraCalulo/>
            <CuerpoCalculo/>
          </Card>
            
            </>
        )
    }
}
