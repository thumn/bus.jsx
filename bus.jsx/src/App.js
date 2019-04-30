import React, { Component } from 'react';
import {render} from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ListRoutes from './ListRoutes.jsx';
import InfoPanel from './InfoPanel.jsx';
import StopList from "./StopList.jsx"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import 'semantic-ui/dist/semantic.min.css';

const AC_TRANSIT_API_BASE_URL = "http://api.actransit.org/transit/";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    buses: null,
                    current_route: null,
                    current_bus_info: null,
                    stops: null
                  };
  }

  async fetchBuses() {
    let route = this.state.current_route;
    // Fetches buses for a specified route from the AC Transit API and updates the buses in state
    if (route) {
      let url = AC_TRANSIT_API_BASE_URL + "route/" + route + "/vehicles/?token=" + process.env.REACT_APP_AC_TRANSIT_API_KEY;
      try {
        let response = await fetch(url);
        let responseJSON = await response.json();
        this.setState({buses: responseJSON});
      }
      catch (error) {
        // TODO: Make into a more noticeable failure messsage
        console.log("The API seems to be down right now. Try again later!");
      }
    }
  }

  async getStops() {
    let route = this.state.current_route;
    let bus = this.state.current_bus_info["CurrentTripId"];
    // Fetches buses for a specified route from the AC Transit API and updates the buses in state
    if (route) {
      let url = AC_TRANSIT_API_BASE_URL + "route/" + route + "/trip/" + bus + "/stops/?token=" + process.env.REACT_APP_AC_TRANSIT_API_KEY;
      let response = await fetch(url);
      let responseJSON = await response.json();
      this.setState({stops: responseJSON});
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.fetchBuses(this.state.current_route), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCurrentRoute(route) {
    // Updates the current_route in state and then calls fetchBuses to get new bus locations
    this.setState({current_route: route,
                    stops: null}, this.fetchBuses);

  }

  onMarkerClick(busInfo) {
    this.setState({current_bus_info: busInfo}, this.getStops);
  }

  render() {
    const {google} = this.props;

    let styles = {
      width: "70%",
      float: "right"
    };

    let styles2 = {
      width: "30%",
      float: "left",
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      height: "auto", 
      width: "auto"
    }

    return (
      <div>
        <div style={styles2}>
          <div>
            <ListRoutes onClick={(route) => this.updateCurrentRoute(route)} />
          </div>
          <div>
            <InfoPanel>
                <div label="Info">
                    {this.state.description}
                </div>
                <div label="Stops">
                    <StopList stops={this.state.stops} />
                </div>
            </InfoPanel>
          </div>
        </div>
        <div style={styles}>
          <Map google={this.props.google}
          initialCenter={{
            lat: 37.8719,
            lng: -122.2585
          }}
          zoom={13}>
            {
              // Maps the bus route data passed in
              this.state.buses &&
              this.state.buses.map(b =>
                (
                  <Marker onClick={(e) => this.onMarkerClick(b)}
                          key={b.CurrentTripId}
                          position={{lat: b.Latitude, lng: b.Longitude}}
                          icon={{
                            url: "http://www.clipartroo.com/images/104/green-bus-stop-clipart-104115.png",
                            scaledSize: new google.maps.Size(20,20)
                          }}/>
                )
              )
            }


            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>Placeholder for state</h1>
                </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer)
