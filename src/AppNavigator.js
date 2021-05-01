import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import AccountScreen from './screens/AccountScreen';
import ResolveAuthScreen from './screens/ResolveAuthScreen';
import HomeScreen from './screens/HomeScreen';
import CreateEmployeeScreen from './screens/CreateEmployeeScreen';
import EmployeeProfileScreen from './screens/EmployeeProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import AdminProfileScreen from './screens/AdminProfileScreen';
import EditAdminProfileScreen from './screens/EditAdminProfileScreen';
import {MaterialIcons} from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons'; 

const headerConfig=({navigation})=>{
return {
headerStyle: {
    backgroundColor: '#6495ed',
},
headerLeft:()=><MaterialIcons 
    name="menu" 
    size={32} 
    color='#fff'
    onPress={()=>navigation.toggleDrawer()}
    style={{margin:5}}
/>,
headerTintColor: '#fff',
headerTitleStyle: {
    fontWeight: 'bold',
}
}};

const employeeProfile=createStackNavigator({
    Employees:HomeScreen,
    Create:CreateEmployeeScreen,
    EmployeeProfile:EmployeeProfileScreen,
    EditEmployeeProfile:EditProfileScreen
},{
    initialRouteName:'Employees',
    defaultNavigationOptions:headerConfig
});

const adminProfile=createStackNavigator({
    AdminProfile:AdminProfileScreen,
    EditAdminProfile:EditAdminProfileScreen
},{
    initialRouteName:'AdminProfile',
    defaultNavigationOptions:headerConfig
});

const DrawerStack = createDrawerNavigator({
    Home: { 
        screen: employeeProfile,
        navigationOptions:{
            drawerIcon: ({ tintColor }) =>  <MaterialIcons name="home" size={25} color={tintColor} />
        }
    },
    Profile: { 
        screen: adminProfile,
        navigationOptions:{
            drawerIcon: ({ tintColor }) =>  <SimpleLineIcons name='user' size={25} color={tintColor}/>
        }
      },
    SignOut: { 
        screen: AccountScreen,
        // navigationOptions:{
        //     drawerIcon:({tintColor})=> />
        // }
     },
});

const AppNavigator=createSwitchNavigator({
    ResolveAuth:ResolveAuthScreen,
    loginFlow:createStackNavigator({
        SignUp:SignUpScreen,
        SignIn:SignInScreen,
    }),
    mainFlow:DrawerStack,
    },
    {
    initialRouteName:'ResolveAuth',
    }
);
  
export default AppNavigator;