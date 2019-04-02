import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'




class PlanetService extends Component{
  constructor(){
    super();
    this.state={StarWarsData:null};
    this.state={NextPage:"https://swapi.co/api/planets/?page=1"};
    this.state={Previous:null};
    this.state={ApiURL:"https://swapi.co/api/planets"};

  }
  
  

  componentDidMount(){
    
    let ApiURL = this.state.ApiURL;
    fetch(ApiURL)
    .then(res=>res.json())
    .then(json=>{ this.setState({StarWarsData:json.results});this.setState({NextPage:json.next})});
    
  }
  

  render(){
   
    const StarWarsData=this.state.StarWarsData;
    if(!StarWarsData) return <div>Loading...</div>
   
    
      return (
        <div>
       <table className="table is-bordered"  >
       <thead>
         <td>Name</td>
         <td>Orbital Period</td>
         <td>Rotation Period</td>
         <td>Diameter</td>
         <td>Climate</td>
         <td>Gravity</td>
         <td>Population</td>
         
       </thead>
    
       {
         StarWarsData.map((planet, index) => (
           
           <tr> 
            <td>{planet.name}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.population}</td>
           
          </tr>
      
          ) ) }
      
      
      </table>


             

            </div>
      );
    }

        
      
    
    
    
    
  }



class App extends Component {
  render() {
    return (

      
      
      <div>
            <PlanetService/>
             <button 
              onClick={() => {
                
              if(this.state.NextPage)
              {
              console.log(this.state.NextPage);
              let nextpage=this.state.NextPage;
              this.setState({ApiURL:{nextpage}});
              
              }
              
              
                
              }}>
              Next
      </button>
      </div>
    );
  }
}

export default App;
