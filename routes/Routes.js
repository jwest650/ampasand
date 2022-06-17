import { View, Text, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import StartPage from "../screens/StartPage";
import Register from "../screens/Register";
import Login from "../screens/Login";
import UserPage from "../screens/UserPage";
import { AntDesign } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",

                    headerStyle: {
                        backgroundColor: "#FE2B4C",
                    },
                    headerTitleStyle: {
                        color: "white",
                    },
                    headerTintColor: {
                        color: "white",
                    },

                    headerBackTitleStyle: {
                        width: 300,
                        color: "white",
                    },
                    animation: "slide_from_right",
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen
                    name="Startpage"
                    component={StartPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Userpage"
                    component={UserPage}
                    options={{
                        headerRight: () => (
                            <Pressable>
                                <AntDesign
                                    name="user"
                                    size={24}
                                    color="white"
                                />
                            </Pressable>
                        ),
                    }}
                />

                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
