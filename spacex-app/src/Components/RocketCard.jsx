import React from 'react';

const RocketCard=({item})=> {
    let {launch_date_local, mission_name} = item
    return (
        <div style = {{border:"1px solid black", height:"80px", width:"300px" ,margin:"10px"}}>
         <div>{mission_name}</div>
          <div>{launch_date_local}</div>  
        </div>
    );
}

export default RocketCard;