import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './src/authenticated/Main';
import Search from './src/authenticated/Search';
import Schedule from './src/authenticated/Schedule';
import Chat from './src/authenticated/Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/store";

// import MyTabBar from './src/authenticated/TabBar';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  	return (
		<Provider store={store}>
		<NavigationContainer>
			<Tab.Navigator tabBarPosition='bottom' style={styles.tabBar}
				screenOptions={({ route }) => ({
					//tabBarLabelStyle: {fontSize: 11, fontWeight: '600'}
					tabBarIcon: ({ focused, color}) => {
					  let iconName;
					  let size = 26;
					  if (route.name === 'Home') {
						iconName = focused ? 'grid' : 'grid-outline';
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
					tabBarLabelStyle: {fontSize: 11, fontWeight: "700"},

				  })}
			>
				<Tab.Screen name='Home' component={Main} />
				<Tab.Screen name='Search' component={Search} />
				<Tab.Screen name='Schedule' component={Schedule} />
				<Tab.Screen name='Chat' component={Chat} />
			</Tab.Navigator>
		</NavigationContainer>
		</Provider>
  	);
}

const styles = StyleSheet.create({
  	tabBar: {
    	flex: 1,
		paddingBottom: Platform.OS === "ios" ? 30 : 0,
		paddingHorizontal: 5,
		paddingTop: Platform.OS === "ios" ? 70 : 0,
  	}
});
