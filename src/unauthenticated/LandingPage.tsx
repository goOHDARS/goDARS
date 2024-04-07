import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  button: {
    backgroundColor: "#039942",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  header: {
    marginBottom: 5,
    fontSize: 50,
    fontWeight: "900",
    color: "#039942",
  },
  subtitle: {
    marginBottom: 50,
    fontSize: 15,
    fontWeight: "600",
  },
});

type Props = {
  onButtonClick: () => void;
};

const LandingPage = ({ onButtonClick }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>goOHDARS</Text>
      <Text style={styles.subtitle}>An alternative to DARS.</Text>
      <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;
