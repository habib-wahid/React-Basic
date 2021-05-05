
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting(props){
  const isloggedIn = props.isloggedIn;
  if(isloggedIn){
    return <UserGreeting />;
  }
  else{
    return <GuestGreeting />;
  }
}
export default Greeting