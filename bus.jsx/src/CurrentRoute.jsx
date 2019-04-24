import React from "react";

// props: current_route (i.e. 51B, 6, etc.)
// props: current_route name
const CurrentRoute = props => {
    
    return (
        <button className={`ui button ${ props.active }`}>
            {props.route}: {props.desc}
        </button>
    );
};

export default CurrentRoute;