import React from 'react';

const PopUpInfo = (props) => {
    return (
      <div>
        <div>
          {props.popupInfo.title} | {props.popupInfo.year}
        </div>
        <img className="pop-up-image"src={props.popupInfo.image} />
      </div>
    );
}

export default PopUpInfo
