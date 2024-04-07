/**
 * @file     Search.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file for the Search component
 * @date     April 06, 2024
*/

import React, { ReactNode, useState } from "react";
import { View, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { SearchBar } from '@rneui/themed';

const SwitchComponent: React.FunctionComponent<{}> = () => {
const [search, setSearch] = useState('');

const updateSearch = (search:string) => {
  setSearch(search);
};

return (
    <ScrollView style={{backgroundColor: "#fff"}} keyboardShouldPersistTaps = {"never"} showsVerticalScrollIndicator = {true}>
        <View style={{paddingTop: Platform.OS === "ios" ? 70 : 0, backgroundColor: "#fff"}}>
            <SearchBar
            placeholder={'Search Courses...'}
            onChangeText={updateSearch}
            value={search}
            lightTheme = {true}
            round = {true}
            containerStyle = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
            />
        </View>
    </ScrollView>);
};

export default SwitchComponent;