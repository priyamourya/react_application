import MeetupList from "../component/meetups/Meetuplist";
import {useState,useEffect} from 'react';


const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
function Allmeetup(){
  const [isloading,setIsloading]=useState(true);
  const[loadedmeetups,setloadedmeetup]=useState([]);
  useEffect(()=>{
    setIsloading(true);
    fetch('https://react-get-started-2e661-default-rtdb.firebaseio.com/meetups.json'
    ).then((response)=>{
      return response.json();
    }).then((data)=>{
      const meetups=[];
      for(const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsloading(false);
      setloadedmeetup(meetups);
  
    })
  },[])
  
  if(isloading){
    return <div>...loading</div>
  }
return (
    <section>
        <h1>This is all meet up page</h1>
       <MeetupList meetup={loadedmeetups}/>
    </section>

    );
}
export default Allmeetup;