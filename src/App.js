import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'


  class PlanetService extends Component{
    constructor(){
      super();
      this.state={StarWarsData:null};
      this.state={NextPage:null};
      this.state={Previous:null};
      this.state={ApiURL:"https://swapi.co/api/planets"};
      this.GetPlanets=this.GetPlanets.bind(this);
      this.NextPageFunc=this.NextPageFunc.bind(this);
      this.PreviousPageFunc = this.PreviousPageFunc.bind(this);
      this.GetDataFromApi = this.GetDataFromApi.bind(this);
  
    }
    
    GetDataFromApi(URL){
     
      if(URL){
       fetch(URL)
       .then(res=>res.json())
       .then(json=>{ this.setState({StarWarsData:json.results});this.setState({NextPage:json.next});this.setState({Previous:json.previous})});
      }
     }
  
    componentDidMount(){
      
    this.GetDataFromApi(this.state.ApiURL);
      
    }

    
    GetPlanets(){
      let StarWarsData=this.state.StarWarsData;
      
      if(!StarWarsData) return <div>Loading...</div>
     
      
        return (
          <div>
         
          {
           StarWarsData.map((planet, index) => (
             
          <div class="card">
            <div class="card-content">
             <p>Name: {planet.name}</p>
             <p>Orbital period: {planet.orbital_period}</p>
             <p>Rotation period: {planet.rotation_period}</p>
             <p>Planet diameter: {planet.diameter}</p>
             <p>Planet climate: {planet.climate}</p>
             <p>Planet gravity: {planet.gravity}</p>
             <p>planet.population: {planet.population}</p>
            </div>
  
          </div>
                          
            ))}
        
       
  
  
        
        
  
        </div>
        );
    }


    NextPageFunc(){
      if(this.state.NextPage)
      {
        
        this.GetDataFromApi(this.state.NextPage);
        return(
          this.GetPlanets()
        );
      }
    }


    PreviousPageFunc(){
      if(this.state.Previous)
      {
        this.GetDataFromApi(this.state.Previous);
        return(
          this.GetPlanets()
        );
      }
    }



    

    
    render(){
      return(
        <div>
         {
           this.GetPlanets()

         }

       <button 
              onClick={() => {
                this.NextPageFunc();
              }}>
              Next
      </button>



      <button  
              onClick={() => {
               this.PreviousPageFunc();
              }}>
              Previous
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
