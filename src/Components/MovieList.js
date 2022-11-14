  /* listes des cards */  
import React from 'react'
import { Rating } from '@mui/material'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

/* function Movilist ona passer comme parametres les data movis des films */
const MovieList = ({dataMovie}) => {
  return (
    <div style={{display:'grid', gridTemplateColumns: 'auto auto auto',gap: '10px',justifyContent:'space-evenly'}}>
      {/*  charger avec le methode MAP les film dans une liste (tableau) */}
      {dataMovie.map((movie,i) => (
      <Col key={i}>
          <Card style={{width:'18rem',height:'35rem'}}>
            <Card.Img variant="top" src={movie.posterUrl} style={{width:'18rem',height:'20rem'}} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.description}
              </Card.Text>
              <Rating max={10} name="read-only" value={movie.rating} readOnly />
              <Card.Text>
              <Card.Link as={Link} to={`/MovieList/${movie.id}`}>Read More</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    
    </div>
  )
}

export default MovieList