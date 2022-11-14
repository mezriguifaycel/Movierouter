import { Rating } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MovieCard = ({data}) => {
  return (
    <div>
    {/*  def  des attributs du carte (preparation du local ) */}
        <Col>
          <Card style={{width:'18rem',height:'35rem'}}>
            <Card.Img variant="top" src={data.posterUrl} style={{width:'18rem',height:'20rem'}} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Rating max={10} name="read-only" value={data.rating} readOnly />
              <Card.Text>
                {data. trailerUrl}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </div>
  )
}

export default MovieCard