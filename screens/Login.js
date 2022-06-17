import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import tailwind from "twrnc";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getData } from "../component/storage";
import BlurView from "../component/BlurView";

export default function Login({ navigation }) {
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);
    const userdata = getData();

    const login = () => {
        setloading(true);

        const user = userdata["_W"];
        if (user.email && user.password) {
            if (user.email == email && user.password == password) {
                setTimeout(() => {
                    setloading(false);
                    navigation.navigate("Userpage", { user });
                    setemail("");
                    setpassword("");
                }, 1000);
            } else {
                seterror(true);
                setloading(false);
            }
        } else {
            seterror(true);
            setloading(false);
        }
        console.log(user);
    };
    useEffect(() => {
        if (error) {
            setInterval(() => seterror(false), 2000);
        }
    }, [error]);

    return (
        <View style={tailwind`flex-1 bg-gray-100`}>
            {loading && !error && <BlurView />}
            <KeyboardAwareScrollView>
                <View style={tailwind`w-full h-62 mb-10`}>
                    <Image
                        source={{
                            uri: "https://img.freepik.com/free-photo/blank-screen-smartphone-with-like-love-emotion-icon-social-media-marketing-concept-by-3d-render_616485-103.jpg?t=st=1655039358~exp=1655039958~hmac=b97a655b97176214cc36dd4d73d9d0f2522c7891f6ac79e55cef69893b774be9&w=740",
                        }}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>

                <View style={tailwind`px-3 `}>
                    <Text>
                        {error && (
                            <Text
                                style={tailwind`text-lg text-red-500 capitalize`}
                            >
                                incorrect check your password or email
                            </Text>
                        )}
                    </Text>
                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-500 mr-2`}
                        >
                            email
                        </Text>
                        <TextInput
                            placeholder="Joanshay@gmail.com"
                            style={tailwind`text-lg`}
                            onChangeText={(text) => setemail(text)}
                            value={email}
                        />
                    </View>
                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-500 mr-2`}
                        >
                            password
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="....."
                            style={tailwind`text-xl`}
                            onChangeText={(text) => setpassword(text)}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={login}
                        style={[
                            tailwind` p-4 mt-5 rounded my-5 `,
                            { backgroundColor: "#FE2B4C" },
                        ]}
                    >
                        <Text
                            style={tailwind`text-center uppercase text-xl text-white tracking-widest `}
                        >
                            Log IN
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={tailwind`text-lg capitalize text-gray-500 pb-1 mt-2`}
                    >
                        forgot? reset password
                    </Text>
                    <View
                        style={tailwind`w-25 border-b-2 border-red-300 ml-13`}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}
