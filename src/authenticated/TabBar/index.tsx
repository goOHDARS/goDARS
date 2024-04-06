/**
 * @file     index.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    
 * @date     April 06, 2024
*/

import { BottomTabBarProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button } from "react-native";


export default function MyTabBar(props: BottomTabBarProps) {
	return (
	    <Button title="Fuck reactnative" onPress={() => {
                // Navigate using the `navigation` prop that you received
                props.navigation.navigate('Home');
		    }}
        >
	    </Button>
	);
}