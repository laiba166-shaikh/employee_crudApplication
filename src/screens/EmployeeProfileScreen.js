import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, Paragraph, Text, Button } from "react-native-paper";
import UserInfoItem from "../components/UserInfoItem";
import ConfirmChoice from "../components/ConfirmChoice";
import { Context as EmployeeContext } from "../context/EmployeeContext";
import Spacer from "../components/Spacer";

const EmployeeProfile = ({ route, navigation }) => {
  const { state, deleteEmployee } = useContext(EmployeeContext);
  const [modal, setModal] = useState(false);
  // const userId=navigation.getParam('userId');
  const employee = state.find((emp) => emp.key === navigation.getParam("key"));
  const { key } = employee;
  console.log("from delete key", key);
  // const onAccept=()=>{
  //     const {key}=employee;
  //     console.log("destructure key ",key);
  //     deleteEmployee({key});
  // }
  // console.log(Employee);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Avatar.Image
          size={100}
          source={require("../../assets/userIcon.jpg")}
          style={styles.image}
        />
        <Title>{employee.name}</Title>
        <Paragraph>{employee.position}</Paragraph>
      </View>
      <UserInfoItem iconName="mail" text={employee.email} />
      <UserInfoItem iconName="call" text={employee.number} />
      <UserInfoItem iconName="attach-money" text={employee.salary} />
      <Spacer>
        <Button mode="contained" dark onPress={() => setModal(!modal)}>
          Fire Employee
        </Button>
      </Spacer>
      <ConfirmChoice
        visible={modal}
        onChooseFirst={() => {
          try {
            const { key } = employee;
            deleteEmployee(key);
            navigation.navigate("Employees");
          } catch (err) {
            console.log("accept error= ", err.message);
          }
        }}
        onChooseSecond={() => {
          setModal(false);
          navigation.navigate("Employees");
        }}
      >
        Do you really want to fire the employee?
      </ConfirmChoice>
    </View>
  );
};

EmployeeProfile.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EditEmployeeProfile", {
            key: navigation.getParam("key"),
          })
        }
      >
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    resizeMode: "cover",
    backgroundColor: "transparent",
  },
  editText: {
    fontSize: 20,
    color: "#fff",
    marginHorizontal: 10,
  },
});

export default EmployeeProfile;
