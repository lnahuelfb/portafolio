import React from 'react'

import Loading from '../images/loading.png'
import './styles/Loader.css'

function Loader () {
    return(
        <div className='loader'>
            <div className="image-container">
                <img src={Loading} alt="Loading"/>
            </div>
        </div>
    )
}

export default Loader