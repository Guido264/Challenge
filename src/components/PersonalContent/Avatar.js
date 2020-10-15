import React from 'react';

import photo from './photo.png';
import { Container, Row, Col, Card } from "react-bootstrap";

import  './Avatar.css';

const card =[
  {
    title: "Name",
    text: "Guido Nicolas Stifani"
  },
  {
    title: "Technical Review",
    text: "Frontend Developer"
  },
  {
    title: "Profile",
    text: "https://www.linkedin.com/in/guido-stifani-426005140/"
  }
];

const Avatar = () => {

  const renderCard = (cardRow, index) => {
    
    return(
      <Card.Body key={index}>
        <Card.Title>{cardRow.title}</Card.Title>
        <Card.Text>
          {cardRow.text}
        </Card.Text>
      </Card.Body>
    )
  }

  return (
    <Container>
      <Row className="row-avatar">
        <Col>
          <div className="backdrop-avatar">
            <div className="container-avatar">
              <img src={photo} className="rounded-avatar" alt="guido" width="135" height="135"></img>
            </div>
          </div>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            {card.map(renderCard)}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Avatar;