import React,{useContext} from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen=()=>{
    const {state,signin,clearError}=useContext(AuthContext);
    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearError}
            />
            <StatusBar
                     barStyle='dark-content'
                     hidden={true}
            />
            <AuthForm
                headerText="Sign in"
                BtnText="Sign in"
                onSubmit={signin}
                errorMessage={state.errorMessage}
            />
            <NavLink
                navText="Don't have an account? Sign up instead!"
                navToRoute='SignUp'
            />
        </View>
    );
};

SignInScreen.navigationOptions=()=>{
    return {
        headerShown:false,
    }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
    }
});

export default SignInScreen;