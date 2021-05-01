import React, {useEffect,useContext} from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen=()=>{
    const {tryLocalSignin}=useContext(AuthContext);
    useEffect(()=>{
        tryLocalSignin();
    },[])

    return (
        <View style={styles.spinner}>
            <ActivityIndicator size={'large'}/>
        </View>
    );
};

ResolveAuthScreen.navigationOptions=()=>{
    return {
        headerShown:false
    }
}
const styles=StyleSheet.create({
    spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default ResolveAuthScreen;