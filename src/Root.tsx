import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "./authenticated/Main";
import Search from "./authenticated/Search";
import Schedule from "./authenticated/Schedule";
import Chat from "./authenticated/Chat";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import LandingPage from "./unauthenticated/LandingPage";
import Signup from "./unauthenticated/Signup";
import { auth } from "../firebase-config";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useSelector } from "react-redux";
import { GET_USER_SUCCESS, getUser } from "./actions/user";
import { signOut } from "firebase/auth";

const Tab = createMaterialTopTabNavigator();

const enum OnboardingFlow {
  GETTING_STARTED,
  SIGNUP,
  MAIN,
}

const Root = () => {
  const dispatch = useAppDispatch();
  const [showLandingPage, setShowLandingPage] = useState(true);

  const user = useSelector((state: any) => state.user.user);

  const mode =
    showLandingPage && !user
      ? OnboardingFlow.GETTING_STARTED
      : user
      ? OnboardingFlow.MAIN
      : OnboardingFlow.SIGNUP;

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        fetch("https://api-eovzxfzvvq-uc.a.run.app/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            dispatch({ type: GET_USER_SUCCESS, payload: res.json() });
          })
          .catch((err) => console.log(err));
      }
    });
  }, []);

  return {
    [OnboardingFlow.GETTING_STARTED]: (
      <LandingPage onButtonClick={() => setShowLandingPage(false)} />
    ),
    [OnboardingFlow.SIGNUP]: <Signup />,
    [OnboardingFlow.MAIN]: (
      <NavigationContainer>
        <Tab.Navigator
          tabBarPosition="bottom"
          style={styles.tabBar}
          screenOptions={({ route }) => ({
            //tabBarLabelStyle: {fontSize: 11, fontWeight: '600'}
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              let size = 26;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Search") {
                iconName = focused
                  ? "search-circle-sharp"
                  : "search-circle-outline";
              } else if (route.name === "Schedule") {
                iconName = focused
                  ? "document-text-sharp"
                  : "document-text-outline";
              } else {
                iconName = focused
                  ? "chatbubble-ellipses-sharp"
                  : "chatbubble-ellipses-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: { fontSize: 11, fontWeight: "700" },
          })}
        >
          <Tab.Screen name="Home" component={Main} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Schedule" component={Schedule} />
          <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
      </NavigationContainer>
    ),
  }[mode];
};

export default Root;

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    paddingBottom: Platform.OS === "ios" ? 30 : 0,
    paddingHorizontal: 5,
    paddingTop: Platform.OS === "ios" ? 70 : 0,
  },
});
