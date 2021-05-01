import createDataContext from './createDataContext';
import _ from 'lodash';
import firebase from 'firebase';
import {navigate} from '../navigationRef';

const employeeReducer=(state,action)=>{
    switch(action.type){
        case 'fetch_employees':
            // console.log(`fetchEmployees= ${action.payload} \n state= ${state}`);
            return action.payload;
        case 'save_employee':
            return state;
        case 'edit_emp':
            return state;
        case 'delete_emp':
            return state;
        default:
            return state;
    }
};

const fetchEmployees=(dispatch)=>{
    return (userId)=>{
        // const {currentUser}=firebase.auth();
        firebase.database().ref(`/users/${userId}/employees`)
        .on('value',(snapshot)=>{
         const empArr=_.map(snapshot.val(),(val,key)=>{
                return {...val,key}
        })
        dispatch({type:'fetch_employees',payload:empArr})
        })
    };
} 

const createEmployee=(dispatch)=>{
    return (name,email,number,position,salary,userId)=>{
        // const {currentUser}=firebase.auth();
        firebase.database().ref(`users/${userId}/employees`).push({
            name,email,number,position,salary
        });
        dispatch({type:'save_employee'});
        navigate('Employees');
    };
}

const editEmployee=(dispatch)=>{
    return (empid,name,email,number,position,salary)=>{
        const {currentUser}=firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/employees/${empid}`).set({
            name,email,number,position,salary
        })
        .then(()=>{
             dispatch({type:'edit_employee'})
             navigate('Employees');
        })
        .catch((err)=>{
            console.log("edit error",err.message);
        });
    };
}

const deleteEmployee=(dispatch)=>{
    return (key)=>{
        console.log("emp action func= ",key);
        const {currentUser}=firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/employees/${key}`).remove()
        .then(()=>{
            dispatch({type:'delete_emp'});
            // navigate('Employees');
        }).catch((err)=>{
            console.log("delete error= ",err.message);
        })
        // navigate('Employees');
    };
}

export const {Context,Provider}=createDataContext(
    employeeReducer,
    {fetchEmployees,editEmployee,createEmployee,deleteEmployee},
    employees=[]
)
