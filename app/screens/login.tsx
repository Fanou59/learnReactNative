import { View, Text, TextInput } from "react-native";
import LensMate from "../components/LensMate";
import Input from "../components/Input";

export default function Login() {
  return (
    <>
      <View className="items-center justify-center">
        <LensMate />
      </View>
      <View className="items-center justify-center">
        <Text className="font-nunito tracking-widest text-2xl">
          Login to your account
        </Text>
      </View>
      <View className="max-w-80 mx-auto w-11/12">
        <Input />
        <Input />
      </View>
    </>
  );
}
