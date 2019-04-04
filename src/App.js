import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'







  class AllPlanets extends Comment{
    constructor(planets){
      super();
      this.state={Planets:planets};
      
    }


    render(){
   
      const StarWarsData=this.state.StarWarsData;
      if(!StarWarsData) return <div>Loading...</div>
     
      
        return (
          <div>
         <table className="table is-bordered"  >
         <tr>
           <th>Name</th>
           <th>Orbital Period</th>
           <th>Rotation Period</th>
           <th>Diameter</th>
           <th>Climate</th>
           <th>Gravity</th>
           <th>Population</th>
           
         </tr>
         <tbody>
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
        
        </tbody>
        </table>
  
  
        
        
  
        </div>
        );
  
  
        
      }


  }



  class PlanetService extends Component{
    constructor(){
      super();
      this.state={StarWarsData:null};
      this.state={NextPage:"https://swapi.co/api/planets/?page=2"};
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
  
  
  
    return(
      <div>
      <AllPlanets/>
      <button 
                  onClick={() => {
                  apiurl=this.state.ApiURL;
                  if(this.state.NextPage)
                  {
                 
                    fetch(apiurl)
                    .then(res=>res.json())
                    .then(json=>{ this.setState({StarWarsData:json.results});this.setState({NextPage:json.next})});
                   
                  
                  }
                  
                  }}>
                  Next
      </button>
      </div>
    );
  }
          
        
      
      
      
      
    }



class App extends Component {
  constructor(){
    super();
    
  }
  render() {
    return (

      
      
      <div>
            <PlanetService/>
             
      </div>
    );
  }
}

export default App;
