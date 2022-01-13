import Meetupitems from "./Meetupitems";
import classes from "./MeetupList.module.css"
function MeetupList(props){
return (<div>
         <ul className="classes.list">
             {props.meetup.map(meetup=><Meetupitems
              key={meetup.id} 
             image={meetup.image}
             description={meetup.description}
            address={meetup.address}
             />)}
         </ul>
        </div>
);
}
export default MeetupList;