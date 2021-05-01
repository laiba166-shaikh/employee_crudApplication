import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const UserCard = ({ EmployeeName, EmployeePosition }) => {
  return (
    <View>
      <Card theme={{ roundness: 3 }} style={{ marginBottom: 5 }}>
        <View style={styles.card}>
          <Avatar.Image
            size={70}
            source={require("../../assets/userIcon.jpg")}
            style={styles.image}
          />
          <View style={{ marginLeft: 5 }}>
            <Title>{EmployeeName}</Title>
            <Paragraph>{EmployeePosition}</Paragraph>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    backgroundColor: "transparent",
    marginHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 80,
  },
});

export default UserCard;
