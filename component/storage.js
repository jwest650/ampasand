import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserData = async (userObj) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(userObj));
    } catch (e) {
        // saving error
        alert(e.message);
    }
};

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("user");
        const user = JSON.parse(jsonValue);

        return user;
    } catch (error) {
        alert(error.message);
    }
};
