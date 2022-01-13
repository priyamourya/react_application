import { Link } from "react-router-dom";
import classes from './mainnavigationstyle.module.css'

function Mainnavigation(){
return (
    <header className={classes.header}>
        <div className={classes.logo}>
            This is nav bar
        </div>
        <nav className={classes.badge}>
        <ul>
            <li>
               <Link to='/'>Main page </Link>
            </li>
            <li>
               <Link to='/newmeetup'>This is a new meeting link</Link>
            </li>
            <li>
               <Link to='/favorite'>This is favorite pages link</Link>
            </li>
            
        </ul>
        </nav>
      
    </header>
);
}
export default Mainnavigation;