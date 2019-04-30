import React from "react";

const StopList = props => {
    
    return (
        <div class="ui list">
    	{
          // Maps the bus route data passed in
          props.stops ?  
          props.stops.map(stop =>
            (
              <div class="item">
			    <i class="map marker icon"></i>
			    <div class="content">
			      <a class="header">{stop["Name"].replace(":", " & ")}</a>
			      <div class="description">Stop ID: {stop["StopId"]}</div>
			    </div>
			  </div>
            )
          ) : 
          <div>Click on a bus to see its stops</div>
        }
		</div>
    );
};

export default StopList;