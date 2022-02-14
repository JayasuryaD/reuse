import React from 'react'
import "./BackLinkStyles.css"
import {Types} from './types'

const BackLink = (props:Types) =>{
    return(
        <a href="#" className='link'>
            <button onClick={props.onClick} className="link-btn">
                <span className='left-arrow'>{"<"}</span>{props.name}
            </button>
        </a>
    )
}

export default BackLink;