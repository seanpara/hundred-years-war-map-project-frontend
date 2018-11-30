import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          {this.props.title}
        </div>
        <img src={this.props.img_url} />
      </div>
    );
  }
}
