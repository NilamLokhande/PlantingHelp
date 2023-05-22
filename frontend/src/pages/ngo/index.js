import React from 'react'
import NgoCard from '../../components/ngoCard'
import ngo from '../../ngo.json'

const Ngo = () => {
  return (
    <div className='ngoCards'>
    {ngo.map((data) => (
        <div>
            <NgoCard data={data}/>
        </div>
    ))}
    </div>
  )
}

export default Ngo