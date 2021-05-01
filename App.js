import React from 'react';
import * as firebase from 'firebase';
import {createAppContainer} from 'react-navigation';
import {DefaultTheme,Provider as PaperProvider} from 'react-native-paper';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as EmployeeProvider} from './src/context/EmployeeContext';
import {setNavigator} from './src/navigationRef';
import AppNavigator from './src/AppNavigator';
import {firebaseConfig} from './src/database/firebaseDB';

firebase.initializeApp(firebaseConfig);
// const firebaseConfig = {
//   apiKey: "AIzaSyCnXzYbktLGt4I4HJ3QUm3Btab6o0JlJSc",
//   authDomain: "employee-app-3508f.firebaseapp.com",
//   databaseURL: "https://employee-app-3508f.firebaseio.com",
//   projectId: "employee-app-3508f",
//   storageBucket: "employee-app-3508f.appspot.com",
//   messagingSenderId: "1064086697200",
//   appId: "1:1064086697200:web:11d710b03a115e776e3e35",
// };

// firebase.initializeApp(firebaseConfig);

const App= createAppContainer(AppNavigator);

const theme={
  ...DefaultTheme,
  roundness:50,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6495ED',
  },
}

export default ()=>{
  return(
    <EmployeeProvider>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <App ref={(nav)=>{setNavigator(nav)}}/>   
        </PaperProvider>
      </AuthProvider>
    </EmployeeProvider>
    
  );
}
