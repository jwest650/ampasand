import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const { navigate } = useNavigation();
    return (
        <SafeAreaView
            style={[
                tailwind`flex flex-1 justify-around  items-center `,
                { backgroundColor: "#E0E4E9" },
            ]}
        >
            <Image
                style={tailwind`w-full h-80`}
                source={{
                    uri: "https://o.remove.bg/downloads/67f23ded-545a-46f6-b99e-79a8ff4f061b/pngtree-tree-and-roots-logo-png-image_4077826-removebg-preview.png",
                }}
            />

            <Pressable onPress={() => navigate("Startpage")}>
                <Text style={tailwind`uppercase text-2xl pb-1 text-gray-500`}>
                    get started
                </Text>
                <View style={tailwind`border-b-2 border-red-300 w-25 ml-4`} />
            </Pressable>
        </SafeAreaView>
    );
}
