import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    // const {info} = this.props;
    // const displayName = `${info.city}, ${info.state}`;

    return (
      <div>
        <div>
          {this.props.name}
        </div>
        <img src={this.props.img_url} />
      </div>
    );
  }
}
