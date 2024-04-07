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
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Divider from "../../divider";
import { useAppDispatch, useAppSelector } from "../../hooks"
import GestureRecognizer from 'react-native-swipe-gestures';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Main(){
    const [toggleProfileModal, setProfileModal] = useState(false);
    const [toggleFreshmanModalFall, setFreshmanModalFall] = useState(false);
    const [toggleSophomoreModalFall, setSophomoreModalFall] = useState(false);
    const [toggleJuniorModalFall, setJuniorModalFall] = useState(false);
    const [toggleSeniorModalFall, setSeniorModalFall] = useState(false);
    const [toggleFreshmanModalSpring, setFreshmanModalSpring] = useState(false);
    const [toggleSophomoreModalSpring, setSophomoreModalSpring] = useState(false);
    const [toggleJuniorModalSpring, setJuniorModalSpring] = useState(false);
    const [toggleSeniorModalSpring, setSeniorModalSpring] = useState(false);
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);

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
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setProfileModal(false) }
            >
                <Modal onDismiss={() => setProfileModal(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleProfileModal}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setProfileModal(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setFreshmanModalFall(false) }
            >
                <Modal onDismiss={() => setFreshmanModalFall(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleFreshmanModalFall}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setFreshmanModalFall(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setFreshmanModalSpring(false) }
            >
                <Modal onDismiss={() => setFreshmanModalSpring(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleFreshmanModalSpring}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setFreshmanModalSpring(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setSophomoreModalFall(false) }
            >
                <Modal onDismiss={() => setSophomoreModalFall(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleSophomoreModalFall}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setSophomoreModalFall(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setSophomoreModalSpring(false) }
            >
                <Modal onDismiss={() => setSophomoreModalSpring(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleSophomoreModalSpring}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setSophomoreModalSpring(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setJuniorModalFall(false) }
            >
                <Modal onDismiss={() => setJuniorModalFall(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleJuniorModalFall}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setJuniorModalFall(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setJuniorModalSpring(false) }
            >
                <Modal onDismiss={() => setJuniorModalSpring(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleJuniorModalSpring}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setJuniorModalSpring(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}>Charizard, Lizardon</Text>
                            <Text style={styles.innerModalText}>P101048083</Text>
                            <Text style={styles.innerModalText}>Credit Hours: 420</Text>
                            <Text style={styles.innerModalText}>GPA: 4.0</Text>
                            <Text style={styles.innerModalText}>Expected Grad Date: 69420</Text>
                            <Text style={styles.innerModalText}>In Progress Hours: 420</Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setSeniorModalFall(false) }
            >
                <Modal onDismiss={() => setSeniorModalFall(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleSeniorModalFall}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setSeniorModalFall(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}></Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <GestureRecognizer
                config={{velocityThreshold: 0.3, directionalOffsetThreshold: 20}}
                onSwipeDown={ () => setSeniorModalSpring(false) }
            >
                <Modal onDismiss={() => setSeniorModalSpring(false)} presentationStyle="pageSheet" animationType="slide" transparent={false} visible={toggleSeniorModalSpring}>
                    <View style={{flex: 1, flexDirection: "column", alignContent: "flex-end", backgroundColor: "#024230"}}>
                        {/* <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-start", padding: 20}}> */}
                        <Pressable onPress={() => setSeniorModalSpring(false)}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-start", paddingTop: 20, paddingRight: 20}}>
                                <Ionicons name={"close-circle-outline"} size={40} color={"white"} />
                                <Text style={{ color: "#fff", fontWeight: "700" }}>close</Text>
                            </View>
                        </Pressable>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={styles.innerModalText}></Text>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <ScrollView contentContainerStyle={{ paddingRight: 10 }}>
                <SafeAreaView>
                    <View style={{paddingBottom: 20, alignContent: "center"}}>
                        <View style={{ flex: 1, flexDirection: "column" , justifyContent: "center"}}>
                            <Text style={styles.Title}>
                                Freshman
                            </Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                                <Pressable style={styles.fallSemContainer} onPress={() => setFreshmanModalFall(true)}>
                                    <View style={styles.fallSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS2400</Text>
                                            <Text style={styles.semInnerText}>4</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>Math2301</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS3560</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.fallSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Fall
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style= {{alignContent: "center"}}>
                                    <Divider orientation="vertical" width={3}  color="#fff"/>
                                </View>
                                <Pressable style={styles.springSemContainer} onPress={() => setFreshmanModalSpring(true)}>
                                    <View style={styles.springSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>4</Text>
                                            <Text style={styles.semInnerText}>CS2401</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>Math2302</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>CS4000</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.springSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Spring
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <View style={{ flex: 1, flexDirection: "column" , justifyContent: "center"}}>
                            <Text style={styles.Title}>
                                Sophomore
                            </Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                                <Pressable style={styles.fallSemContainer} onPress={() => setSophomoreModalFall(true)}>
                                    <View style={styles.fallSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS2400</Text>
                                            <Text style={styles.semInnerText}>4</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>Math2301</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS3560</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.fallSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Fall
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style= {{alignContent: "center"}}>
                                    <Divider orientation="vertical" width={3}  color="#fff"/>
                                </View>
                                <Pressable style={styles.springSemContainer} onPress={() => setSophomoreModalSpring(true)}>
                                    <View style={styles.springSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>4</Text>
                                            <Text style={styles.semInnerText}>CS2401</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>Math2302</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>CS4000</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.springSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Spring
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <View style={{ flex: 1, flexDirection: "column" , justifyContent: "center"}}>
                            <Text style={styles.Title}>
                                Junior
                            </Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                                <Pressable style={styles.fallSemContainer} onPress={() => setJuniorModalFall(true)}>
                                    <View style={styles.fallSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS2400</Text>
                                            <Text style={styles.semInnerText}>4</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>Math2301</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS3560</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.fallSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Fall
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style= {{alignContent: "center"}}>
                                    <Divider orientation="vertical" width={3}  color="#fff"/>
                                </View>
                                <Pressable style={styles.springSemContainer} onPress={() => setJuniorModalSpring(true)}>
                                    <View style={styles.springSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>4</Text>
                                            <Text style={styles.semInnerText}>CS2401</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>Math2302</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>CS4000</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.springSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Spring
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <View style={{ flex: 1, flexDirection: "column" , justifyContent: "center"}}>
                            <Text style={styles.Title}>
                                Senior
                            </Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                                <Pressable style={styles.fallSemContainer} onPress={() => setSeniorModalFall(true)}>
                                    <View style={styles.fallSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS2400</Text>
                                            <Text style={styles.semInnerText}>4</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>Math2301</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>CS3560</Text>
                                            <Text style={styles.semInnerText}>3</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.fallSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Fall
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style= {{alignContent: "center"}}>
                                    <Divider orientation="vertical" width={3}  color="#fff"/>
                                </View>
                                <Pressable style={styles.springSemContainer} onPress={() => setSeniorModalSpring(true)}>
                                    <View style={styles.springSem}>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>4</Text>
                                            <Text style={styles.semInnerText}>CS2401</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>Math2302</Text>
                                        </View>
                                        <View style={styles.classContainer}>
                                            <Text style={styles.semInnerText}>3</Text>
                                            <Text style={styles.semInnerText}>CS4000</Text>
                                        </View>
                                    </View>
                                    <View style={styles.oneThirdContainer}>
                                    </View>
                                    <View style ={styles.springSemTextContainer}>
                                        <Text style={styles.semText}>
                                            Spring
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
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
    springSem: {
        paddingTop: 20,
        flex: 1, 
        height: 100, 
        alignContent: "flex-start",
    },
    fallSem: {
        paddingTop: 20,
        flex: 1, 
        height: 100, 
        alignContent: "flex-start",
    },
    springSemContainer: {
        backgroundColor: "#024230", 
        minWidth: "48%", 
        minHeight: 300, 
        borderTopRightRadius: 20, 
        borderBottomRightRadius: 20, 
        flexDirection:"column",
    },
    fallSemContainer: {
        backgroundColor: "#024230", 
        minWidth: "48%", 
        minHeight: 300, 
        borderTopLeftRadius: 20, 
        borderBottomLeftRadius: 20, 
        flexDirection:"column",
    },
    fallSemTextContainer: {
        flex: 1, 
        height: 100, 
        justifyContent: "flex-end", 
        alignItems: "flex-end", 
        paddingRight: 20,
        paddingBottom: 20,
    },
    springSemTextContainer: {
        flex: 1, 
        height: 100, 
        justifyContent: "flex-end", 
        alignItems: "flex-start", 
        paddingBottom: 20,
        paddingLeft: 20,
    },
    semText: {
        fontSize: 16, 
        fontWeight: "500", 
        color: "#fff",
    },
    semInnerText: {
        color: "white", 
        fontSize: 16, 
        fontWeight: "700",
    },
    oneThirdContainer: {
        flex: 1, 
        height: 100,
    },
    Title: {
        fontSize: 24, 
        fontWeight: "400", 
        paddingBottom: 5, 
        paddingLeft: 20,
    },
    innerModalText: {
        fontSize: 24, 
        color: "#fff", 
        fontWeight: "500", 
        alignSelf: "center", 
        paddingBottom: 10
    },
    classContainer: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingHorizontal: 20,
    },
});
