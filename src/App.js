import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Jumbotron";
import Card from "./components/imgCard";
import img from "./img.json";
import "./App.css";


class App extends Component {
  state = {
    img: img,
    clickedImage: [],
    score: 0
  };

  imageClick = event => {
    const currentImage = event.target.alt;
    const imgAlreadyClicked = this.state.clickedImage.indexOf(currentImage) > -1;

    if (imgAlreadyClicked) {
      this.setState({
        img: this.state.img.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
      alert("You lost buddy! Wanna give it another shot?")
    } else {
      this.setState({
        img: this.state.img.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: this.state.clickedImage.concat(
          currentImage
        ),
        score: this.state.score + 1
      },
        () => {
          if (this.state.score === 12) {
            alert("Woohooo you won!!!");
            this.setState({
              img: this.state.img.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Header />
        <div className="wrapper row">
          {this.state.img.map(img => (
            <Card
              imageClick={this.imageClick}
              id={img.id}
              key={img.id}
              img={img.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
