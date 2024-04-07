import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "./src/authenticated/Main";
import Search from "./src/authenticated/Search";
import Schedule from "./src/authenticated/Schedule";
import Chat from "./src/authenticated/Chat";
import { Provider } from "react-redux";
import { store } from "./src/store";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarPosition="bottom"
          initialRouteName="Home"
          style={styles.userData}
          screenOptions={{
            tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
          }}
        >
          <Tab.Screen name="Home" component={Main} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Schedule" component={Schedule} />
          <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  userData: {
    flex: 1,
    paddingBottom: 30,
    paddingHorizontal: 5,
  },
});
