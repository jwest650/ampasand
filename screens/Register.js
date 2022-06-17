import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import tailwind from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { storeUserData } from "../component/storage";

export default function Register({ navigation }) {
    const [image, setImage] = useState(null);

    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [phonenmber, setphonenmber] = useState("");
    const [role, setrole] = useState("");
    const [twitter, settwitter] = useState("");
    const [linkedin, setlinkedin] = useState("");
    const register = () => {
        const user = {
            fullname,
            email,
            password,
            phonenmber,
            role,
            twitter,
            linkedin,
            image,
        };
        storeUserData(user);
        setfullname("");
        setemail("");
        setlinkedin("");
        setphonenmber("");
        setrole("");
        settwitter("");

        if (fullname && password && email) {
            navigation.navigate("Login");
        } else {
            alert("please input details");
        }
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <KeyboardAwareScrollView
            behavior=""
            style={[tailwind`flex-1 bg-gray-100`]}
        >
            <View style={tailwind`flex-1 p-3 `}>
                <TouchableOpacity
                    onPress={pickImage}
                    style={tailwind`mx-auto bg-white rounded-full  my-1 w-30 h-30 overflow-hidden`}
                >
                    {image ? (
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 50,
                            }}
                        />
                    ) : (
                        <AntDesign
                            name="user"
                            size={100}
                            color="#FE2B4C"
                            style={tailwind`p-2`}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage}>
                    {image ? (
                        <Text
                            style={[
                                tailwind`capitalize text-center uppercase text-lg mb-5 border border-red-200 w-20 mx-auto p-1 rounded`,
                                { color: "#FE2B4C" },
                            ]}
                        >
                            change
                        </Text>
                    ) : (
                        <Text
                            style={[
                                tailwind`capitalize text-center uppercase text-lg mb-5 `,
                                { color: "#FE2B4C" },
                            ]}
                        >
                            add profile photo
                        </Text>
                    )}
                </TouchableOpacity>
                <View style={tailwind`bg-white flex-1 px-5`}>
                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            full name
                        </Text>
                        <TextInput
                            placeholder="Joan shay"
                            style={tailwind`text-lg`}
                            value={fullname}
                            onChangeText={(text) => setfullname(text)}
                        />
                    </View>

                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            email
                        </Text>
                        <TextInput
                            value={email}
                            placeholder="Joanshay@gmail.com"
                            style={tailwind`text-lg`}
                            onChangeText={(text) => setemail(text)}
                        />
                    </View>

                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            password
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            value={password}
                            placeholder="....."
                            style={tailwind`text-xl`}
                            onChangeText={(text) => setpassword(text)}
                        />
                    </View>

                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3 `}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            phone number
                        </Text>
                        <TextInput
                            placeholder="+233 (245) 190"
                            style={tailwind`text-lg`}
                            value={phonenmber}
                            onChangeText={(text) => setphonenmber(text)}
                        />
                    </View>

                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            role
                        </Text>
                        <TextInput
                            placeholder="Director of marketing"
                            style={tailwind`text-lg`}
                            value={role}
                            onChangeText={(text) => setrole(text)}
                        />
                    </View>

                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            twitter
                        </Text>
                        <TextInput
                            placeholder="@joanshay"
                            style={tailwind`text-lg`}
                            value={twitter}
                            onChangeText={(text) => settwitter(text)}
                        />
                    </View>

                    <View
                        style={tailwind`flex-row items-center justify-between border-b border-gray-200 p-3`}
                    >
                        <Text
                            style={tailwind`capitalize text-lg text-gray-400 mr-2`}
                        >
                            linkedin
                        </Text>
                        <TextInput
                            placeholder="/joan.shay"
                            style={tailwind`text-lg`}
                            value={linkedin}
                            onChangeText={(text) => setlinkedin(text)}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={register}
                        style={[
                            tailwind` p-4 mt-5 rounded my-3 `,
                            { backgroundColor: "#FE2B4C" },
                        ]}
                    >
                        <Text
                            style={tailwind`text-center uppercase text-xl text-white tracking-widest `}
                        >
                            register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}
