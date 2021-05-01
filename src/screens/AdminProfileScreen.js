import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const AdminProfile=({navigation})=>{
    return(
        <View>
            <Text>Admin Profile</Text>
            <Button
                mode="contained"
                dark
                onPress={()=>navigation.navigate('EditAdminProfile')}>
                Admin Profile
            </Button>
        </View>
    );
};

const styles=StyleSheet.create({});

export default AdminProfile;