import React from 'react'
import { Types } from './types'
import './TableContentStyles.css'


const TableContent = (props:Types) =>{
    return(
        <div className='wrapper-table'>
            <div className='title-c'>
              <p>{props.title}</p>
            </div>
            <div className='checkbox-c'>
                <input type="checkbox"  />
            </div>
        </div>
    )
}

export default TableContent