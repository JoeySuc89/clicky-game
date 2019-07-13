import React from "react";

// Here we create the cards that hold all the images.
const Card = props => (
    <div className="Card col-md-3 mt-3" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "",)} src={"../images/" + props.image} />
    </div>
  </div>
);

export default Card;
