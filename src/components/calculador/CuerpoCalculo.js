import React, { Component } from 'react'
import BasculaIMC from './BasculaIMC'
import FormularioCalculo from './FormularioCalculo'
import { VerCalculo } from './VerCalculo'
import { Card, Col, Row } from 'react-bootstrap';
let Bascula ='https://es.conair.com/assets/images/database/products/preview/WW346-Weight-Watchers-Scales-by-Conair-Digital-Precision-BMI-Scale.png';

export default class CuerpoCalculo extends Component {
    constructor(){
        super()
    this.state = {
        peso : null,
      altura: null
    }   
}
   
    guardarPesoAltura = (peso, altura) => {
        this.setState({
            peso: peso,
            altura: altura,
        })
    }

    render() {
        return (
            <>
            <Card.Body>
                <Row>
                    <Col>
               <FormularioCalculo guardarPesoAltura ={this.guardarPesoAltura}/> 
                    </Col>
                    <Col>
               <VerCalculo peso={this.state.peso } estatura={this.state.altura} />
               </Col>
               <Col>
               <BasculaIMC color='blue' bascula={Bascula}/>
               </Col>
               </Row>
            </Card.Body>
            </>
        )
    }
}
