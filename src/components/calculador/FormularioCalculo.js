import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import Loading from '../../pages/Loading'

export default class FormularioCalculo extends Component {
   constructor(){
       super()
       this.state = {
           peso: 0,
        altura: 0,
        loading:false

       }  
     /*   this.eventoClick = this.eventoClick.bind(this) */
    }

    render() {
        return (
            
            <article>
                <Form>
                <Form.Group >
                        <Form.Label htmlFor="">Peso <small>(kilos)</small></Form.Label>
                        <Form.Control type="number" name="peso" id="peso" onKeyUp ={ (e) => 
                              this.setState({peso: e.target.value})       
                            }
                         />
                </Form.Group>
                <Form.Group >
                       <Form.Label htmlFor="">Altura <small>(mt)</small></Form.Label>
                        <Form.Control type="number" name="altura" id="altura"  onKeyUp ={ (e) => 
                           this.setState({altura: e.target.value})           
                            }     
                         />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button type="button" className="mt-4 bg-success" onClick= {() => 
                        this.props.guardarPesoAltura(parseFloat(this.state.peso),parseFloat( this.state.altura))}
                        >Enviar</Button>
                </div>
                <Loading visible = {this.state.loading}/>
                </Form>
            </article>
        )
    }
}
