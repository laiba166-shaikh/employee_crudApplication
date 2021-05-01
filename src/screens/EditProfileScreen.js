import React,{useContext} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import EmployeeForm from '../components/EmployeeForm';
import {Context as EmployeeContext} from '../context/EmployeeContext';

const EmployeeProfile=({navigation})=>{
    const {state,editEmployee}=useContext(EmployeeContext);
    const employee=state.find(
        emp=>emp.key===navigation.getParam('key')
    );
    console.log("edit src",employee);
    return(
        <View style={styles.container}>
        <ScrollView>
            <EmployeeForm
                BtnText="Update Employee"
                initialValues={{
                    name:employee.name,
                    position:employee.position,
                    email:employee.email,
                    salary:employee.salary,
                    number:employee.number
                }}
                onSubmit={(name,email,number,position,salary,userId)=>{
                    editEmployee(employee.key,name,email,number,position,salary);
                }}
            />
        </ScrollView>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        // borderColor:'red',
        // borderWidth:2
    },
});

export default EmployeeProfile;