import React from 'react'

export const VerCalculo = ({estatura ,peso}) => {
    return (
        <>
            <article className="text-center">
                <h3>IMC</h3>
         {estatura > 0 && peso > 0 ? <span><b>{(peso/(estatura)**2).toFixed(2) }</b></span>
                : <span><b>Ingresa un valor</b></span>
                } 

            </article>
        </>
    )
}
