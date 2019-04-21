import React from "react";
import CurrentRoute from './CurrentRoute.jsx';

// props: onClick = this.updateCurrentRoute
const ListRoutes = props => {
    
    return (
        <div class="ui labeled icon buttons">
            <div >
                <div onClick={() => props.onClick("6")}><CurrentRoute route="6" desc="Downtown Oakland/Downtown Berkeley"/></div>
                <div onClick={() => props.onClick("36")}><CurrentRoute route="36" desc="West Oakland/UC Berkeley"/></div>
                <div onClick={() => props.onClick("51B")}><CurrentRoute route="51B" desc="Rockridge/Berkeley Amtrak"/></div>
                <div onClick={() => props.onClick("18")}><CurrentRoute route="18" desc="San Pablo/Lake Merritt"/></div>
                <div onClick={() => props.onClick("52")}><CurrentRoute route="52" desc="UC Village/UC Campus"/></div>
                <div onClick={() => props.onClick("65")}><CurrentRoute route="65" desc="Spruce St./Euclid Ave."/></div>
                <div onClick={() => props.onClick("F")}><CurrentRoute route="F" desc="San Francisco/Berkeley"/></div>
                <div onClick={() => props.onClick("F")}><CurrentRoute route="F" desc="San Francisco/Berkeley"/></div>
            </div>
        </div>
    );
};

export default ListRoutes;