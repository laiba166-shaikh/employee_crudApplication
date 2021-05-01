import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput, Title, Text } from 'react-native-paper';
import Spacer from './Spacer';
import { FontAwesome } from '@expo/vector-icons';

const AuthForm = ({ headerText, BtnText, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [screen, setScreen] = useState(false);
    return (
        <KeyboardAvoidingView
            behavior="position"
            enabled={screen}
            keyboardVerticalOffset={2}>
            <View>
                <FontAwesome name="user-circle-o" size={50} style={styles.icon} />
                <Title style={styles.text}>{headerText}</Title>
                <Spacer>
                    <TextInput
                        label='Email'
                        value={email}
                        mode='outlined'
                        placeholder='user@gmail.com'
                        onFocus={() => setScreen(true)}
                        onChangeText={(text) => { setEmail(text) }}
                        blurOnSubmit={true}
                        selectionColor="#6495ED"
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </Spacer>
                <Spacer>
                    <TextInput
                        label='Password'
                        secureTextEntry
                        value={password}
                        mode='outlined'
                        placeholder='password'
                        onFocus={() => setScreen(true)}
                        onChangeText={(pass) => { setPassword(pass) }}
                        selectionColor="#6495ED"
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </Spacer>
                {errorMessage ?
                    <Text style={styles.error}>{errorMessage}</Text> :
                    null}
                <Spacer>
                    <Button
                        mode="contained"
                        dark
                        onFocus={() => setScreen(true)}
                        onPress={() => onSubmit({ email, password })}>
                        {BtnText}
                    </Button>
                </Spacer>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "200",
        textTransform: 'uppercase',
        color: '#6495ED',
    },
    error: {
        color: 'red',
        marginLeft: 15,
        fontSize: 18,
    },
    icon: {
        textAlign: 'center',
        color: "#6495ED",
    }

});

export default AuthForm;