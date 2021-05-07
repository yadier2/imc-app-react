import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalLoading = document.querySelector('#loading')
export default class PortalLoading extends Component {
    constructor(){
        super()
        this.contentChilds =document.createElement('article')
        
    }
    componentDidMount(){
      portalLoading.appendChild(this.contentChilds)
    }
    //para desmontarlo del dom
    componentWillUnmount(){
        portalLoading.removeChild(this.contentChilds)
    }
    render() {
        const {children} = this.props
        return ReactDOM.createPortal(
            children,
            this.contentChilds
        )
    }
}
