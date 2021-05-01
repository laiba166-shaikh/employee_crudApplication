let navigator;
import {NavigationActions} from 'react-navigation';

export const setNavigator=(nav)=>{
    navigator=nav;
}

export const navigate=(routeName,params)=>{
    try{
        navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }catch(err){
        console.log("navigator error= ",err.message);
    }
  
}