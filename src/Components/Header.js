import Tweets from "./Tweets";


function Header(props){
    return(
        <header className="name">
            <h1> {props.name} </h1>
            <Tweets tweet={props.tweet} age={props.age} />
        </header>
    )
}

export default Header