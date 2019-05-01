import React from "react";
import Route from './Route.jsx';

// props: onClick = this.updateCurrentRoute
const ListRoutes = props => {

    return (
        <div>
        <h1 className="ui header" style={{textAlign: "center", padding: "10px"}}>BUS ROUTES</h1>
            <div className="ui vertical buttons">
                    <div onClick={() => props.onClick("6")}><Route route="6" active="false" desc="Downtown Oakland/Downtown Berkeley"/></div>
                    <div onClick={() => props.onClick("36")}><Route route="36" active="false" desc="West Oakland/UC Berkeley"/></div>
                    <div onClick={() => props.onClick("51B")}><Route route="51B" active="false" desc="Rockridge/Berkeley Amtrak"/></div>
                    <div onClick={() => props.onClick("18")}><Route route="18" active="false" desc="San Pablo/Lake Merritt"/></div>
                    <div onClick={() => props.onClick("52")}><Route route="52" active="false" desc="UC Village/UC Campus"/></div>
                    <div onClick={() => props.onClick("65")}><Route route="65" active="false" desc="Spruce St./Euclid Ave."/></div>
                    <div onClick={() => props.onClick("F")}><Route route="F" active="false" desc="San Francisco/Berkeley"/></div>
            </div>
        </div>
    );
};

export default ListRoutes;
