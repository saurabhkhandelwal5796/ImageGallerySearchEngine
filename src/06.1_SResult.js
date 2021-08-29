import React from 'react'

const SResult = (props) => {
    let imgSrc = `https://source.unsplash.com/user/erondu/400x300?${props.name}`
    return (
        <>
        <div>
        <img src= {imgSrc} alt = 'search' /> 
        </div>
            
        </>
    )
}

export default SResult
