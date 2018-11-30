import React, {PureComponent} from 'react';

export default class PopUpInfo extends PureComponent {

  render() {
    console.log(this.props)
    // debugger
    return (
      <div>
        <div>
          {this.props.popupInfo.title} | {this.props.popupInfo.year}
        </div>
        <img className="pop-up-image"src={this.props.popupInfo.image} />
      </div>
    );
  }
}
