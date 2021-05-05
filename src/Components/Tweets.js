import React from 'react'

const Tweets = (props) => {
    return (
        <div>
             
            <h1>{props.tweet}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}

export default Tweets
