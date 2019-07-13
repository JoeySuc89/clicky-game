import React from 'react'

const Jumbotron = (props) => {
  return (
    <div>
      <jumbotron fluid>
        <container fluid>
        <h1 className="display-3">Welcome to 90's!</h1>
        <p className="lead">Click on an image, after each image you click the score goes up!</p>
        <p>Click on an image twice then the game is over and you atrat again!</p>
        </container>
      </jumbotron>
    </div>
  );
};

export default Jumbotron;
