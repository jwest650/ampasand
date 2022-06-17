import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import tailwind from "twrnc";

export default function UserPage({ route }) {
    const data = route.params;

    return (
        <View style={tailwind`flex-1 `}>
            <View style={tailwind`mt-10 px-10 `}>
                <Text style={[tailwind`text-3xl  mb-2`, { color: "#4C4D4F" }]}>
                    Exchange contact information
                </Text>
                <Text style={[tailwind`text-2xl `, { color: "#9B9B9B" }]}>
                    scan this qr below to share your contact
                </Text>
            </View>

            <View style={tailwind`ml-12 my-13  px-10`}>
                <QRCode
                    style={tailwind`w-50`}
                    value={JSON.stringify(data.user)}
                    size={230}
                />
            </View>
            <View style={tailwind`flex-row items-center  px-10 mb-18`}>
                <Image
                    source={{ uri: data.user.image }}
                    style={{ width: 55, height: 55, borderRadius: 40 }}
                />
                <View style={tailwind`ml-3`}>
                    <Text
                        style={[
                            tailwind`text-xl capitalize mb-1`,
                            { color: "#4C4D4F" },
                        ]}
                    >
                        {data.user.fullname}
                    </Text>
                    <Text style={tailwind`text-xl capitalize text-gray-400`}>
                        {data.user.role}
                    </Text>
                </View>
            </View>
            <View
                style={tailwind`flex-row items-center  border-t border-gray-300 py-5 px-10`}
            >
                <Text
                    style={[
                        tailwind`capitalize text-lg  `,
                        { color: "#4C4D4F" },
                    ]}
                >
                    Want to add a new connection?
                </Text>
                <TouchableOpacity
                    style={tailwind`border-l-2 border-r-2  border-b-2  border border-red-300 py-1 px-5 rounded ml-10 `}
                >
                    <Text style={tailwind` text-base text-red-700 `}>
                        Scan QR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
