import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class PlanetService extends Component{
  constructor(){
    super();
    this.state={StarWarsData:null};

  }

  

  componentDidMount(){
    
    const ApiURL = "https://swapi.co/api/planets";
    fetch(ApiURL)
    .then(res=>res.json())
    .then(json=>{this.setState({StarWarsData:json.results})});
  }

  render(){
   
    const StarWarsData=this.state.StarWarsData;
    if(!StarWarsData) return <div>Loading...</div>
   
    
      return (
       <div>
      
    
       {
         StarWarsData.map((planet, index) => (
           <div>
            <p>{planet.name}</p>
            <p>{planet.orbital_period}</p>
          </div>
          ) ) }
      
      
      </div>
       

        
      );
    }

        
      
    
    
    
    
  }



class App extends Component {
  render() {
    return (

      <PlanetService/>
    );
  }
}

export default App;
