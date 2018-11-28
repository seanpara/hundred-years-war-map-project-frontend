import React, {PureComponent} from 'react';



export default class EventPin extends PureComponent {

  render() {
    const {size = 20, onClick} = this.props;

    return (
      <svg
        height={size}
        viewBox="0 0 24 24"
        style={{...pinStyle, transform: `translate(${-size / 2}px,${-size}px)`}}
        onClick={onClick}
      >
        <path d={ICON}/>
      </svg>
    );
  }
}
