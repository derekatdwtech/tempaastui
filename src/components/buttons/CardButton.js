import React from 'react';


const Cardbutton = (props) => {
return(
    <div className="block" onClick={props.onClick} style={{cursor:"pointer"}}>
       <div className="title">
           <div className="icon" style={{textAlign:"center"}}>
               <i className="icon-computer fa-4x" style={{textAlign:"center"}}></i>
           </div>
           <strong>Device Name: {props.name}</strong>
           <p>{props.subName}</p>
       </div>
    </div>
)
}

export default Cardbutton;