import React, {Component} from 'react';
import Tab from './Tabs';

class Info extends Component {
  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  clickTab(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    const {
      clickTab,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const{ label} = child.props;

            return(<Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={clickTab}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    )
  }
}

export default Info
