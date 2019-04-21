import React from "react";

// props: current_route (i.e. 51B, 6, etc.)
// props: current_route name
const CurrentRoute = props => {
    
    return (
        <div class="ui labeled button" tabindex="0">
            <div class="ui button">
                {props.route}
            </div>
            <a class="ui basic label">
                {props.desc}
            </a>
        </div>
    );
};

export default CurrentRoute;