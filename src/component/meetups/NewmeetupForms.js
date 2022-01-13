import { Ref, useRef } from 'react';
import classes from './NewmeetupForm.module.css'
import Card from '../../ui/card';
function NewmeetupForm(props){
   
    const TitleRef=useRef();
    const imageRef=useRef();
    const addressRef=useRef();
    const descriptionRef=useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle=TitleRef.current.value;
        const enteredImg=imageRef.current.value;
        const enteredAddress=addressRef.current.value;
        const enteredDescription=descriptionRef.current.value;
        const meetupData={
            title:enteredTitle,
            image:enteredImg,
            address:enteredAddress,
            description:enteredDescription
        }
        props.onAddMeetup(meetupData);
    }
return (
   
     <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor='title'>New Meetup Title</label>
         <input type='text' required id='title' ref={TitleRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>New Meetup url</label>
         <input type='text' required id='image' ref={imageRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>New Meetup Address</label>
         <input type='text' required id='address' ref={addressRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>New Meetup Form description</label>
         <textarea required id='description' ref={descriptionRef}/>
      </div>
      <div className={classes.actions}>
       <button>Add New Meetup</button>
      </div>
     </form>
  
);
}
export default NewmeetupForm;