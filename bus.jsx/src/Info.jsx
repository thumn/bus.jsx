import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'Info'
    };
  }

  render() {
    return(
    <div>
      <div class="ui top attached tabular menu">
      <a class="active item" data-tab="info">Information</a>
      <a class="item" data-tab="stops">Stops</a>
    </div>
    <div class="ui bottom attached active tab segment" data-tab="info">
      Information
    </div>
    <div class="ui bottom attached tab segment" data-tab="stops">
      Stops
    </div>
  </div>
    );
  }
}

export default Info
