import NewmeetupForm from "../component/meetups/NewmeetupForms";
import {useHistory} from 'react-router-dom';
function Newmeetuppage(){
    const history=useHistory();
function onMeetupHandler(meetupData){
   
fetch('https://react-get-started-2e661-default-rtdb.firebaseio.com/meetups.json',
{method:'POST',
body:JSON.stringify(meetupData),
headers:{
    'Content-Type':'application/json'
}
}).then(()=>{
history.replace('/')
});
}

return (<div>
    <h1>Add new meetups</h1>
<NewmeetupForm onAddMeetup={onMeetupHandler}/>,
</div>);
}
export default Newmeetuppage;