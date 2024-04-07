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
import Divider from "../../divider";

export default function Main(){
    const [modalVisible, setModalVisible] = useState(false);
    const [toggleProfileModal, setProfileModal] = useState(false);

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
                <Pressable onPress={() => setProfileModal(!toggleProfileModal)}>
                    <Image source={require('../../../assets/android-chrome-256x256.png')} style={{width: 60, height: 60, borderRadius: 100, borderColor: "black", borderWidth: 2, justifyContent: "center", alignItems: "center", marginRight: 20}}></Image>
                </Pressable>
            </SafeAreaView>
            <Modal animationType="slide" transparent={false} visible={toggleProfileModal} onRequestClose={() => setModalVisible(!modalVisible)} style={{flex: 1, width: "100%", height: "75%", alignItems:"flex-end"}}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "blue", maxHeight: "75%"}}>
                    <Pressable onPress={() => setProfileModal(false)}>
                        <Text style={{fontSize: 14, fontWeight: "500"}}>
                            This is my profile
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
                    <View style={{ paddingBottom: 20 }}>
                        <Text style={{ fontSize: 24 , fontWeight: "400", paddingBottom: 5}}>
                            Freshman
                        </Text>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center", flexDirection:"row", justifyContent: "center"}} onPress={() => setModalVisible(true)}>
                            <View style={{flex: 1, alignContent: "flex-start", paddingLeft: 20, justifyContent: "center"}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2400</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2301</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS3560</Text>
                            </View>
                            <View style= {{maxHeight: 300, alignContent: "center"}}>
                                <Divider orientation="vertical" width={3}  color="#756e65"/>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 20}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2302</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2401</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4000</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4620</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Text style={{ fontSize: 24 , fontWeight: "400", paddingBottom: 5}}>
                            Sophomore
                        </Text>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center", flexDirection:"row", justifyContent: "center"}} onPress={() => setModalVisible(true)}>
                            <View style={{flex: 1, alignContent: "flex-start", paddingLeft: 20, justifyContent: "center"}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2400</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2301</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS3560</Text>
                            </View>
                            <View style= {{maxHeight: 300, alignContent: "center"}}>
                                <Divider orientation="vertical" width={3}  color="#756e65"/>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 20}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2302</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2401</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4000</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4620</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Text style={{ fontSize: 24 , fontWeight: "400", paddingBottom: 5}}>
                            Junior
                        </Text>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center", flexDirection:"row", justifyContent: "center"}} onPress={() => setModalVisible(true)}>
                            <View style={{flex: 1, alignContent: "flex-start", paddingLeft: 20, justifyContent: "center"}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2400</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2301</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS3560</Text>
                            </View>
                            <View style= {{maxHeight: 300, alignContent: "center"}}>
                                <Divider orientation="vertical" width={3}  color="#756e65"/>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 20}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2302</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2401</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4000</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4620</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Text style={{ fontSize: 24 , fontWeight: "400", paddingBottom: 5}}>
                            Senior
                        </Text>
                        <Pressable style={{backgroundColor: "#024230", minWidth: "85%", minHeight: 300, borderRadius: 20, alignItems: "center", flexDirection:"row", justifyContent: "center"}} onPress={() => setModalVisible(true)}>
                            <View style={{flex: 1, alignContent: "flex-start", paddingLeft: 20, justifyContent: "center"}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2400</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2301</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS3560</Text>
                            </View>
                            <View style= {{maxHeight: 300, alignContent: "center"}}>
                                <Divider orientation="vertical" width={3}  color="#756e65"/>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 20}}>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Math2302</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS2401</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4000</Text>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CS4620</Text>
                            </View>
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
        height: "75%",
        width: "100%",
    },
});