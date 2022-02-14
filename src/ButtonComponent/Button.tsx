import React from 'react'
import './ButtonStyles.css'
import { Types } from './types'

const Button = (props:Types) =>{
    const {name,onClick} = props
    return(
        <button className={`${props.color ? 'button-styles add-color':"button-styles"}`} onClick={onClick}>{name}</button>
    )
}

export default Button