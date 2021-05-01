import React from 'react';
import {View,StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import {Card,Text} from 'react-native-paper';

const UserInfoItem=({text,iconName})=>{
    return(
        <Spacer>
            <Card theme={{roundness:3}}>
            <View style={styles.card}>
                <MaterialIcons name={iconName} size={25} style={{marginLeft:5}}/>
                <Text style={styles.cardText}>{text}</Text>
            </View>
            </Card>
        </Spacer>
    );
};

const styles=StyleSheet.create({
    card:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    cardText:{
        fontSize:18,
        marginHorizontal:10,
    }
});

export default UserInfoItem;