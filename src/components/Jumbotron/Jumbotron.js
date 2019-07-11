import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
        <h1 className="display-3">Welcome to 90's!</h1>
        <p className="lead">Click on an image, after each image you click the score goes up!</p>
        <p>Click on an image twice then the game is over and you atrat again!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
