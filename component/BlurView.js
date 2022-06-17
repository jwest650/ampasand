import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { BlurView as Blur } from "expo-blur";
import tailwind from "twrnc";

export default function BlurView() {
    return (
        <Blur
            style={tailwind`flex-1  z-10 w-full h-full absolute  items-center justify-center`}
            intensity={100}
            tint="dark"
        >
            <ActivityIndicator size="large" color="white" />
            <Text style={tailwind`text-2xl uppercase text-white mt-2`}>
                logging in
            </Text>
        </Blur>
    );
}
