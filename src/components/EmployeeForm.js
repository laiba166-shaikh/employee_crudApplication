import React, { useState, useContext } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, TextInput, Avatar, Text } from "react-native-paper";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const EmployeeForm = ({ BtnText, onSubmit, initialValues }) => {
  const {
    state: { userId },
  } = useContext(AuthContext);
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [number, setNumber] = useState(initialValues.number);
  const [salary, setSalary] = useState(initialValues.salary);
  const [position, setPosition] = useState(initialValues.position);
  // const [screen,setScreen]=useState(false);
  const image = "../../assets/userIcon.jpg";
  return (
    // <View style={{borderColor:'red',borderWidth:2}}>
    // <KeyboardAvoidingView
    // behavior="position"
    // enabled={screen}
    // keyboardVerticalOffset={2}
    // >
    <View>
      <View style={styles.imageContainer}>
        <Avatar.Image size={90} source={require(image)} style={styles.image} />
      </View>
      <Button
        mode="text"
        dark
        onPress={() =>
          console.log("data=", email, name, number, salary, position, image)
        }
      >
        Upload Photo
      </Button>
      <Spacer>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          placeholder="Name"
          theme={{ roundness: 3 }}
          // onFocus={()=>setScreen(true)}
          onChangeText={(text) => {
            setName(text);
          }}
          blurOnSubmit={true}
          selectionColor="#6495ED"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          placeholder="abc@gmail.com"
          theme={{ roundness: 3 }}
          // onFocus={()=>setScreen(true)}
          onChangeText={(text) => {
            setEmail(text);
          }}
          blurOnSubmit={true}
          selectionColor="#6495ED"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Number"
          value={number}
          mode="outlined"
          placeholder="999-999-99"
          theme={{ roundness: 3 }}
          // onFocus={()=>setScreen(true)}
          onChangeText={(text) => {
            setNumber(text);
          }}
          blurOnSubmit={true}
          selectionColor="#6495ED"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Position"
          value={position}
          mode="outlined"
          theme={{ roundness: 3 }}
          // onFocus={()=>setScreen(true)}
          onChangeText={(text) => {
            setPosition(text);
          }}
          blurOnSubmit={true}
          selectionColor="#6495ED"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Salary"
          value={salary}
          mode="outlined"
          placeholder="$"
          theme={{ roundness: 3 }}
          // onFocus={()=>setScreen(true)}
          onChangeText={(text) => {
            setSalary(text);
          }}
          blurOnSubmit={true}
          selectionColor="#6495ED"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Button
          mode="contained"
          dark
          // onFocus={()=>setScreen(true)}
          onPress={() =>
            onSubmit(name, email, number, position, salary, userId)
          }
        >
          {BtnText}
        </Button>
      </Spacer>
    </View>
    // </KeyboardAvoidingView>
  );
};

EmployeeForm.defaultProps = {
  initialValues: {
    name: "",
    email: "",
    number: "",
    position: "",
    salary: "",
  },
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    resizeMode: "cover",
    backgroundColor: "transparent",
  },
});

export default EmployeeForm;
