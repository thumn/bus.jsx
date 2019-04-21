import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// TODO: replace w/ real data from API transit
import BusRouteSampleData from "./BusRouteSampleData";

export class MapContainer extends Component {
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