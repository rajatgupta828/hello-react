import React from 'react';

const GreetWithProps = (props) => {
   console.log(props)
   return(
       <div>
           <h1> Greeting with Properties : Property revieved  : {props.name},  email : {props.emailId}</h1>
           {props.children}
       </div>   
   )
       

}

export default GreetWithProps;