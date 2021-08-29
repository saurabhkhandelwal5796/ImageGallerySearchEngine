import React, { useState } from 'react'
import SResult from './06.1_SResult'


const Search = () => {
    const [img, setimg] = useState('')
    const func1 = (event) => {
        let data = event.target.value
        setimg(data)
        console.log(event.target.value);
    }
    return ( 
        <>
        <div className='searchbar'>
        <input type="text" onChange= {func1} value = {img} placeholder='search anything' />
        { img === '' ? null : <SResult name = {img} /> } 
        </div>
        
        </>
    )
}

export default Search
