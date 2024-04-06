/**
 * @file     Main.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file for the Main screen component
 * @date     April 06, 2024
*/

import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Modal, Pressable } from "react-native";

export default function Main(){
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View>
                    <Text>
                        Hello World
                    </Text>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text>
                    Fuck React Native
                </Text>
            </Pressable>
        </View>
        );
}