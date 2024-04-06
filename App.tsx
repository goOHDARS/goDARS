import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './src/authenticated/Main';
import Search from './src/authenticated/Search';
import Schedule from './src/authenticated/Schedule';
import Chat from './src/authenticated/Chat';
import MyTabBar from './src/authenticated/TabBar';
// import MyTabBar from './src/authenticated/TabBar';


const Tab = createBottomTabNavigator();

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
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name='Home' component={Main} />
				<Tab.Screen name='Search' component={Search} />
				<Tab.Screen name='Scheduler' component={Schedule} />
				<Tab.Screen name='Chat' component={Chat} />
			</Tab.Navigator>
		</NavigationContainer>
  	);
}

const styles = StyleSheet.create({
  	userData: {
    	flex: 1,
    	alignItems: 'center',
		justifyContent: 'center',
  	}
});
