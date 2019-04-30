import React from "react";

const StopList = props => {
    
    return (
        <div class="ui list">
		  <div class="item">
		    <i class="map marker icon"></i>
		    <div class="content">
		      <a class="header">Krolewskie Jadlo</a>
		      <div class="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
		    </div>
		  </div>
		  <div class="item">
		    <i class="map marker icon"></i>
		    <div class="content">
		      <a class="header">Xian Famous Foods</a>
		      <div class="description">A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</div>
		    </div>
		  </div>
		  <div class="item">
		    <i class="map marker icon"></i>
		    <div class="content">
		      <a class="header">Sapporo Haru</a>
		      <div class="description">Greenpoint's best choice for quick and delicious sushi.</div>
		    </div>
		  </div>
		  <div class="item">
		    <i class="map marker icon"></i>
		    <div class="content">
		      <a class="header">Enid's</a>
		      <div class="description">At night a bar, during the day a delicious brunch spot.</div>
		    </div>
		  </div>
		</div>
    );
};

export default StopList;