/**
 * @file     Main.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file for the Main screen component
 * @date     April 06, 2024
*/

import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Modal, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

export default function Main(){
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <SafeAreaView style={{paddingBottom: 20, justifyContent: "space-between", flexDirection: "row"}}>
                <View style={{flex: 1, flexDirection: "column", marginLeft: 20}}>
                    <Text style={{ fontSize: 28, fontWeight: "600" }}>
                        Charizard, Lizardon
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "300" }}>
                        COMPUTER SCIENCE
                    </Text>
                </View>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Image source={require('../../../assets/android-chrome-256x256.png')} style={{width: 60, height: 60, borderRadius: 100, borderColor: "black", borderWidth: 2, justifyContent: "center", alignItems: "center", marginRight: 20}}></Image>
                </Pressable>
            </SafeAreaView>
            <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredContent}>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Text>
                            Hello World
                        </Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredContent}>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Text>
                            Hello World
                        </Text>
                    </Pressable>
                </View>
            </Modal>
            <ScrollView>
                <SafeAreaView>
                    <View style={{paddingBottom: 20}}>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center"}} onPress={() => setModalVisible(true)}>
                            <Text style={{color: "#fff"}}>
                                Fuck React Native
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center"}} onPress={() => setModalVisible(true)}>
                            <Text style={{color: "#fff"}}>
                                Fuck React Native
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center"}} onPress={() => setModalVisible(true)}>
                            <Text style={{color: "#fff"}}>
                                Fuck React Native
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center"}} onPress={() => setModalVisible(true)}>
                            <Text style={{color: "#fff"}}>
                                Fuck React Native
                            </Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>);
}

const styles = StyleSheet.create({
    centeredContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});