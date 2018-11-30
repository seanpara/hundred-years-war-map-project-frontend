import React, {PureComponent} from 'react';

export default class PopUpInfo extends PureComponent {

  render() {
    console.log(this.props)
    // debugger
    return (
      <div>
        <div>
          {this.props.title}
        </div>
        <img className="pop-up-image"src={this.props.image_url} />
      </div>
    );
  }
}
