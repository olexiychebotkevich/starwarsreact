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
      this.PreviousPageFunc=this.NextPageFunc.bind(this);
  
    }
    
    
  
    componentDidMount(){
      
      let ApiURL = this.state.ApiURL;
      fetch(ApiURL)
      .then(res=>res.json())
      .then(json=>{ this.setState({StarWarsData:json.results});this.setState({NextPage:json.next});this.setState({Previous:json.previous})});
      
    }
    
    GetPlanets(){
      let StarWarsData=this.state.StarWarsData;
      
      if(!StarWarsData) return <div>Loading...</div>
     
      
        return (
          <div>
         <table key="table1" className="table is-bordered">
          <thead key="trhead">
          <tr>
           <th key="th1">Name</th>
           <th key="th2">Orbital Period</th>
           <th key="th3">Rotation Period</th>
           <th key="th4">Diameter</th>
           <th key="th5">Climate</th>
           <th key="th6">Gravity</th>
           <th key="th7">Population</th>
           </tr>
         </thead>

         <tbody key="tbody1">
         {
          
           StarWarsData.map((planet, index) => (
             
             <tr key={"trinbody"+parseInt(index)}> 
              <td key="td1">{planet.name}</td>
              <td key="td2">{planet.orbital_period}</td>
              <td key="td3">{planet.rotation_period}</td>
              <td key="td4">{planet.diameter}</td>
              <td key="td5">{planet.climate}</td>
              <td key="td6">{planet.gravity}</td>
              <td key="td7">{planet.population}</td>
             
            </tr>
        
            ))}
        
        </tbody>
        </table>
  
  
        
        
  
        </div>
        );
    }


    NextPageFunc(){
      if(this.state.NextPage)
      {
        
        console.log("Next page func!!")
        fetch(this.state.NextPage)
        .then(res=>res.json())
        .then(json=>{ this.setState({StarWarsData:json.results});this.setState({NextPage:json.next});this.setState({Previous:json.previous})});
      
        return(
          this.GetPlanets()
        );
      }
    }


    PreviousPageFunc(){
      if(this.state.Previous)
      {
       
        fetch(this.state.Previous)
        .then(res=>res.json())
        .then(json=>{ this.setState({StarWarsData:json.results});this.setState({NextPage:json.next});this.setState({Previous:json.previous})});
      
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
                if(this.state.NextPage)
                {
                  this.setState({ApiURL:this.state.NextPage});
                  this.componentDidMount();
                  return(
                    this.GetPlanets()
                  );
                }  
              
              }}>
              Next
      </button>



      <button 
              onClick={() => {
                if(this.state.Previous)
                {
                  this.setState({ApiURL:this.state.Previous});
                  this.componentDidMount();
                  return(
                    this.GetPlanets()
                  );
                }
              
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
