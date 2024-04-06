import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './src/authenticated/Main';
import Search from './src/authenticated/Search';
import Schedule from './src/authenticated/Schedule';
import Chat from './src/authenticated/Chat';
import MyTabBar from './src/authenticated/TabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
			<Tab.Navigator tabBarPosition='bottom' style={styles.userData}
				screenOptions={({ route }) => ({
					//tabBarLabelStyle: {fontSize: 11, fontWeight: '600'}
					tabBarIcon: ({ focused, color}) => {
					  let iconName;
					  let size = 26;
					  if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					  } else if (route.name === 'Search') {
						iconName = focused ? 'search-circle-sharp' : 'search-circle-outline';
					  }
					  else if (route.name === "Schedule"){
						iconName = focused ? 'document-text-sharp' : 'document-text-outline';
					  }
					  else{
						iconName = focused ? 'chatbubble-ellipses-sharp' : 'chatbubble-ellipses-outline';
					  }
		  
					  // You can return any component that you like here!
					  return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: 'green',
					tabBarInactiveTintColor: 'gray',
				  })}
		  
			
			>
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