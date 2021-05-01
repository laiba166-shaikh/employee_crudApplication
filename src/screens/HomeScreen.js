import React,{useContext,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import {FAB} from 'react-native-paper';
import UserCard from '../components/UserCard';
import {Context as EmployeeContext} from '../context/EmployeeContext';
import {Context as AuthContext} from '../context/AuthContext';

const HomeScreen=({navigation})=>{
    const {state:{userId}}=useContext(AuthContext);
    const {state,fetchEmployees}=useContext(EmployeeContext);
    // navigation.addListener("willFocus",()=>{
    //     fetchEmployees(userId);
    // })
    // useEffect(()=>{
    //     fetchEmployees(userId);
    // },[]);
    
    useEffect(()=>{
        console.log("useEffect")
        try{
            fetchEmployees(userId);
        }
        catch(err){
            console.log("user Effect error= ",err.message);
        }
        
        // const listener=navigation.addListener('didFocus',()=>{
        //     console.log('focused');
        //     fetchEmployees(userId);
        // })
        // return ()=>{
        //     listener.remove();
        // }
    },[]);
    return(
        <View style={styles.container}>
        <FlatList
                data={state}
                keyExtractor={(emp)=>emp.key}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>{navigation.navigate('EmployeeProfile',{'key':item.key,userId})}}>
                            <UserCard
                                EmployeeName={item.name}
                                EmployeePosition={item.position}
                            />
                        </TouchableOpacity>
                    );
                }}
        />
        <FAB
            style={styles.fab}
            icon="plus"
            color="#fff"
            onPress={()=>navigation.navigate('Create')}
        />
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:'#6495ed',
    },
});

export default HomeScreen;