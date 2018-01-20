import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
          particles: {
            number: {
              value : 165,
              density: {
                enable: true,
                value_area: 2000
              }
          
              }
            }
          
        }
      




class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  
onInputChange = (event) => {
  console.log(event);
}

  render() {
    return (
    <div className="App">
         <Particles className='particles'
         params={particlesOptions}
            />
      
 

       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm onInputChange={this.onInputChange}/>
      
       {/*
       <FaceRecognition />*/} 
    </div>
    );
  }
}

export default App;
