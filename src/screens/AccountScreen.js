import React,{useContext} from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';
import {Button,Text} from 'react-native-paper';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen=()=>{
    const {signout}=useContext(AuthContext);
    return(
        <View>
            <StatusBar
                barStyle='light-content'
                hidden={false}
            />
            <Text style={styles.text}>Account Screen</Text>
            <Spacer>
            <Button
                mode='contained'
                dark
                onPress={signout}
            >Sign out
            </Button>
            </Spacer> 
        </View>
    );
}

AccountScreen.navigationOptions=()=>{
    return{
        headerShown:false,
    }
};

const styles=StyleSheet.create({
    text:{
        fontSize:24,
        textAlign:'center',
        margin:15,
    }
});

export default AccountScreen;