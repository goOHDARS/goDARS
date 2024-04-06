import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './src/authenticated/Main';
import Search from './src/authenticated/Search';
import Schedule from './src/authenticated/Schedule';
import Chat from './src/authenticated/Chat';
import MyTabBar from './src/authenticated/TabBar';
// import MyTabBar from './src/authenticated/TabBar';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  	return (
		<NavigationContainer>
			{/* screenOptions={ ({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home"){
					}
					else if (route.name === "Search"){
					}
					else if (route.name === "Scheduler"){
					}
					else{
						
					}
				}

				tabBar={props => <MyTabBar {...props} />}
			})} */
			
			}
			<Tab.Navigator tabBarPosition='bottom' initialRouteName='Home' style={styles.userData} screenOptions={{ tabBarLabelStyle: {fontSize: 11, fontWeight: '600'}}}>
				<Tab.Screen name='Home' component={Main} />
				<Tab.Screen name='Search' component={Search} />
				<Tab.Screen name='Schedule' component={Schedule} />
				<Tab.Screen name='Chat' component={Chat} />
			</Tab.Navigator>
		</NavigationContainer>
  	);
}

const styles = StyleSheet.create({
  	userData: {
    	flex: 1,
		paddingBottom: 30,
		paddingHorizontal: 5,
  	}
});
