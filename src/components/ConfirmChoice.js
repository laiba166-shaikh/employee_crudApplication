import React, { useContext } from 'react';
import {View,StyleSheet,Modal} from 'react-native';
import {Text,Button,Card} from 'react-native-paper';
import {Context as AuthContext} from '../context/AuthContext';
// import {Context as EmployeeContext} from '../context/EmployeeContext';

const ConfirmChoice=({children,visible,onChooseFirst,onChooseSecond})=>{
    const {state:{userId}}=useContext(AuthContext);
    // const {deleteEmployee}=useContext(EmployeeContext);
    return(
        <Modal
        animationType="slide"
        onRequestClose={()=>{}}
        transparent
        visible={visible}>
        <View style={styles.container}>
            <Card style={styles.card} theme={{roundness:1}}>
                <Text style={styles.text}>{children}</Text>
            </Card>
            <Card theme={{roundness:1}}>
            <View style={styles.btnContainer}>
                <Button 
                    mode="contained"
                    dark
                    onPress={onChooseFirst}
                    style={{width:150}}
                >Yes
                </Button>
                <Button
                    mode="contained"
                    dark
                    style={{width:150}}
                    onPress={onChooseSecond}
                >No
                </Button>
            </View>
            </Card>
        </View>
        </Modal>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        position:'relative',
        backgroundColor:'rgba(0,0,0,0.75)',
    },
    text:{
        fontSize:18,
        flex:1,
        textAlign:'center',
        lineHeight:20,
    },
    card:{
        justifyContent:'center',
        height:50,
        padding:12
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    }
})
export default ConfirmChoice;