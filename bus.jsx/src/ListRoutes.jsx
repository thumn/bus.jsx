import React from "react";
import CurrentRoute from './CurrentRoute.jsx';

// props: onClick = this.updateCurrentRoute
const ListRoutes = props => {
    
    return (
        <div>
        <h1 class="ui header" style={{textAlign: "center", padding: "10px"}}>BUS ROUTES</h1>
            <div class="wide ui left floated vertical labeled buttons">
                    <div onClick={() => props.onClick("6")}><CurrentRoute route="6" active="false" desc="Downtown Oakland/Downtown Berkeley"/></div>
                    <div onClick={() => props.onClick("36")}><CurrentRoute route="36" active="false" desc="West Oakland/UC Berkeley"/></div>
                    <div onClick={() => props.onClick("51B")}><CurrentRoute route="51B" active="false" desc="Rockridge/Berkeley Amtrak"/></div>
                    <div onClick={() => props.onClick("18")}><CurrentRoute route="18" active="false" desc="San Pablo/Lake Merritt"/></div>
                    <div onClick={() => props.onClick("52")}><CurrentRoute route="52" active="false" desc="UC Village/UC Campus"/></div>
                    <div onClick={() => props.onClick("65")}><CurrentRoute route="65" active="false" desc="Spruce St./Euclid Ave."/></div>
                    <div onClick={() => props.onClick("F")}><CurrentRoute route="F" active="false" desc="San Francisco/Berkeley"/></div>
            </div>
        </div>
    );
};

export default ListRoutes;