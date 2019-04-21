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
      <div class="ui top attached tabular menu">
        <a class="active item" data-tab="Info">Info</a>
        <a class="item" data-tab="Stops">Stops</a>
      </div>
      <div class="ui bottom attached active tab segment" data-tab="first">
        First
      </div>
      <div class="ui bottom attached tab segment" data-tab="second">
        Second
      </div>
      <div class="ui bottom attached tab segment" data-tab="third">
        Third
      </div>
    );
  }
}
