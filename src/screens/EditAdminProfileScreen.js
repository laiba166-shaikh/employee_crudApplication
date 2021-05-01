import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const EditAdminProfile=({navigation})=>{
    return(
        <View>
            <Text>Edit Admin Profile</Text>
            <Button
                mode="contained"
                dark
                onPress={()=>navigation.navigate('AdminProfile')}>
                Edit Admin Profile
            </Button>
        </View>
    );
};

const styles=StyleSheet.create({});

export default EditAdminProfile;