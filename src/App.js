import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "tachyons";
import { Component } from "react";
import ParticlesBg from "particles-bg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" type="square" bg={true} />
        {/* <ParticlesBg color="#ff0000" num={200} type="polygon" bg={true} /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
