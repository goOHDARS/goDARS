import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from './src/Main';
import { Search } from './src/Search';
import { Schedule } from './src/Schedule';
import { Chat } from './src/Chat';


const Tab = createBottomTabNavigator();

export default function App() {
  	return (
		<View>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name='Home' component={Main}>

					</Tab.Screen>
					<Tab.Screen name='Search' component={Search}>

					</Tab.Screen>
					<Tab.Screen name='Scheduler' component={Schedule}>

					</Tab.Screen>
					<Tab.Screen name='Chat' component={Chat}>

					</Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		</View>
  	);
}

const styles = StyleSheet.create({
  	userData: {
    	flex: 1,
    	alignItems: 'flex-start',
    	fontSize: 20,
    	fontWeight: '400',
  	}
});
