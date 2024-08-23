import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};
export const getData = async (key, value) => {
  try {
    const value = await AsyncStorage.getItem(key, value);
    return value;
  } catch (error) {
    console.log(error);
  }
};
