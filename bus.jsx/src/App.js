import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const AC_TRANSIT_API_BASE_URL = "http://api.actransit.org/transit/";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {buses: null};
  }

  async fetchBuses() {
    // YOUR CODE HERE
    // 1. Send a request to the Kanye West API
    // 2. Parse the Response as JSON
    // 3. Use the `.quote` property of the JSON
    //    to update the `quote` field in state.
    let url = AC_TRANSIT_API_BASE_URL + "route/6/vehicles/?token=" + process.env.REACT_APP_AC_TRANSIT_API_KEY;
    let response = await fetch(url);
    let responseJSON = await response.json();
    this.setState({buses: responseJSON});
  }

  componentDidMount() {
    this.fetchBuses();
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

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