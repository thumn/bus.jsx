import React from "react";

const Info = props => {
    
    return (
      <div>
      { 
      props.currentRoute && props.busInfo && props.stops ? 
          (
            <div>
              <h2 class="ui header">
                <i class="bus icon"></i>
                <div class="content">
                  {props.currentRoute}
                </div>
                <div class="sub header">To: {props.stops[props.stops.length - 1]["Name"].replace(":", " and ")}</div>
              </h2>
              <h3 class="ui header">
                Trip ID
                <div class="sub header">{props.busInfo["CurrentTripId"]}</div>
              </h3>
              <h3 class="ui header">
                Vehicle ID
                <div class="sub header">{props.busInfo["VehicleId"]}</div>
              </h3>
              <h3 class="ui header">
                Location Last Reported
                <div class="sub header">{props.busInfo["TimeLastReported"]}</div>
              </h3>
            </div>
          )
        : <div>Click on a bus to see its information</div>
      }
      </div> 
    );
};

export default Info;