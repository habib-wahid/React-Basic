import React from 'react'

const Event = () => {


    function handleClick(e){
        e.preventDefault();
        console.log('this link is clicked');
    }
    return (
        <div>
            <a href= 'https://www.w3schools.com/' onClick = {handleClick}>
                click me
            </a>
        </div>
    )
}

export default Event
