import React,{useContext} from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen=()=>{
    const {state,signup,clearError}=useContext(AuthContext);
    // console.log(state.userId);
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
                    headerText='Sign Up'
                    BtnText="Sign up"
                    onSubmit={signup}
                    errorMessage={state.errorMessage}
                />
                <NavLink
                    navText='Already have an account? Log in instead!'
                    navToRoute='SignIn'
                />
        </View>
    );
};

SignUpScreen.navigationOptions=()=>{
    return{
        headerShown:false
    }
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
  },
});

export default SignUpScreen;