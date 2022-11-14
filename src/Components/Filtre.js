import { Rating } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'

const Filtre = ({setSearch, setRate}) => {
  return (
    <div className='search' >
      {/* recherche par movie (selon le btn de recheche) */}
        <Form.Control
        onChange={(e)=> setSearch(e.target.value)}
              style={{width:'300px'}}
              type="text"
              placeholder="Search Your favorite Movie"
            />
            {/* recherche par rating */}
        <Rating 
        onChange={(e,newValue)=> setRate(newValue)}
        max={10} name="simple-controlled" defaultValue={0} />

    </div>
  )
}

export default Filtre