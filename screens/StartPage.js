import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function StartPage() {
    const { navigate } = useNavigation();
    return (
        <View style={[tailwind`flex-1`, { backgroundColor: "#E0E4E9" }]}>
            <Image
                style={[tailwind`w-full h-96  `]}
                source={{
                    uri: "https://img.freepik.com/free-vector/modern-office-desk-with-flat-design_23-2147907386.jpg?t=st=1654959090~exp=1654959690~hmac=89ac81eca5e6bb589bd2fde72bb7074ccd4299076e8b6663ebbde6a26e081bd2&w=740",
                }}
            />
            <View style={tailwind`justify-between flex-1 px-3`}>
                <View>
                    <Text
                        style={[
                            tailwind`text-xl  uppercase mt-6`,
                            { color: "#4C4D4F" },
                        ]}
                    >
                        keep in touch with the people of tree-connect
                    </Text>
                    <Text
                        style={[
                            tailwind`text-lg capitalize  mt-2 
                       `,
                            { color: "#9B9B9B" },
                        ]}
                    >
                        sign and register with your email
                    </Text>
                </View>
                <View style={tailwind` flex-row justify-between mb-5`}>
                    <Pressable
                        style={tailwind``}
                        onPress={() => navigate("Register")}
                    >
                        <Text
                            style={tailwind`uppercase text-2xl text-gray-600 pb-1`}
                        >
                            register
                        </Text>
                        <View
                            style={tailwind`border-b-2 border-red-300 w-20 `}
                        />
                    </Pressable>
                    <Pressable
                        style={tailwind``}
                        onPress={() => navigate("Login")}
                    >
                        <Text
                            style={tailwind`uppercase text-2xl text-gray-600 pb-1`}
                        >
                            sign in
                        </Text>
                        <View
                            style={tailwind`border-b-2 border-red-300 w-17 `}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
