
function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder '+props.color}>

        </div>
    );
}

function WelcomeDialog(){

    return(
        <FancyBorder color="black">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
              Thank you for visiting
            </p>
        </FancyBorder>
    );
}
export default WelcomeDialog