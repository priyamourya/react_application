import { createContext } from "react";
import { useState } from "react";

function favoritesContextProvider(props){
    const [userFavorites,setuserFavorites]=useState([]);
    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length
    };
    function addFavoriteHandler(favoritemeetups){
        setuserFavorites((prevuseFavorites)=>{
           return prevuseFavorites.concat(favoritemeetups);
        })
    }
    function removeFavoriteHandler(meetupId){
        setuserFavorites((prevuserFavorites)=>{
            return prevuserFavorites.filter(meetup=>meetup.id!=meetupId);
         })
    }
    function isFavoriteitem(meetupId){
        setuserFavorites((prevuserFavorites)=>{
            return prevuserFavorites.some(meetup=>meetup.id==meetupId);
         })
    }
    const FavioriteContext=createContext({
        favorites:[],
        totalFavorites:0,
        addFav:addFavoriteHandler,
        removeFav: removeFavoriteHandler
    });
   return <FavioriteContext.Provider value={context}>
       {props.children}
   </FavioriteContext.Provider>
}