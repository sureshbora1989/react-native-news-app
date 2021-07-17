import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const gotToDeetails = () => {
    navigation.navigate("News Detais");
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen </Text>
      <Button title="Go to Details" onPress={gotToDeetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF342"
  }
});
export default HomeScreen;
