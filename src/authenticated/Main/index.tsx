/**
 * @file     Main.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file for the Main screen component
 * @date     April 06, 2024
 */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredContent}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Hello World</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={{ backgroundColor: "#024230" }}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={{
            minWidth: "75%",
            height: "35%",
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>Fuck React Native</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
