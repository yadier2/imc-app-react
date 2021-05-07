import React, { Component } from 'react'

export default class Main extends Component {

    constructor({children}){
        super()
      /*   console.log(children); */
    }


    render() {
        return (
            <section  className="App">
                {this.props.children}
            </section>
        )
    }
}
