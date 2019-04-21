import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// TODO: replace w/ real data from API transit
import BusRouteSampleData from "./BusRouteSampleData";

const AC_TRANSIT_API_BASE_URL = "http://api.actransit.org/transit/";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {buses: null};
  }

  async fetchBuses(route) {
    // Fetches buses for a specified route from the AC Transit API and updates the buses in state
    let url = AC_TRANSIT_API_BASE_URL + "route/" + route + "/vehicles/?token=" + process.env.REACT_APP_AC_TRANSIT_API_KEY;
    let response = await fetch(url);
    let responseJSON = await response.json();
    this.setState({buses: responseJSON});
  }

  componentDidMount() {
    var route = prompt("Please enter a bus route", "51B");
    this.fetchBuses(route);
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        {
          // Maps the bus route data passed in
          BusRouteSampleData.map(b => 
            (
              <Marker onClick={this.onMarkerClick}
                      key={b.VehicleId} 
                      position={{lat: b.Latitude, lng: b.Longitude}}/>
            )          
          )
        }
        

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Placeholder for state</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer)