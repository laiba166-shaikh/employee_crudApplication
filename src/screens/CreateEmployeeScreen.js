import React,{useContext} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,ScrollView} from 'react-native';
import EmployeeForm from '../components/EmployeeForm';
import {Context as EmployeeContext} from '../context/EmployeeContext';

const CreateEmployee=({navigation})=>{
    const {state,createEmployee}=useContext(EmployeeContext);
    // console.log("create src",props);
    return(
        <View style={styles.container}>
        <ScrollView>
            <EmployeeForm
                BtnText="Save Employee"
                onSubmit={(name,email,number,position,salary,userId)=>{
                    createEmployee(name,email,number,position,salary,userId);
                }}
            />
        </ScrollView>
        </View>
    );
};

// CreateEmployee.navigationOptions=({navigation})=>{
//     //return object to customize different things inside our header
//     return{
//         headerRight: ()=>(
//         <TouchableOpacity onPress={()=> navigation.navigate('Employees')}>
//            <Text style={styles.saveText}>Save</Text>     
//         </TouchableOpacity>
//         )
//     };
// }C

const styles=StyleSheet.create({
    container:{
        flex:1,
        // borderWidth:2,
        // borderColor:'red'
    },
    saveText:{
        fontSize:20,
        color:'#fff',
        marginHorizontal:10  
      }
});

export default CreateEmployee;