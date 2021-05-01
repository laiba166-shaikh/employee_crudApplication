import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink=({navigation,navText,navToRoute})=>{
    return(
        <View>
        <TouchableOpacity
             onPress={()=>{navigation.navigate(navToRoute)}}>
                <Text style={styles.link}>{navText}</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    link:{
        color:'#6495ED',
        fontSize:18,
        marginLeft:15
    }
});

export default withNavigation(NavLink);