import React from 'react';

export default (props) =>{
  if ((props.channelType === "public") && (props.channel.is_dm === false)) {
    return (
      <>
        <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>{props.channel.name}</li></a>
      </>
    )
  } else if ((props.channelType === "private") && (props.channel.is_dm === true)) {
    return (
      <>
        <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>{props.channel.name}</li></a>
      </>
    )
  } else {
    return ""
  }
}




// <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>Private Convo 7</li></a>