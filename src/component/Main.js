import React from 'react';
import Home from './Home';

function Main(props) {

    if (props.content==='Home'){
    return ( <div> <Home/></div> )
    }
    else if(props.content==='My Network')
    {
        return (
            <div>
              Home  
            </div>
        )
    }
}

export default Main
