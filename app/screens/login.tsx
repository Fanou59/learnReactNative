import { View, Text, TextInput, Image } from "react-native";
import LensMate from "../components/LensMate";
import Input from "../components/Input";
import ButtonValidation from "../components/ButtonValidation";

export default function Login() {
  return (
    <View className="flex-1 justify-evenly">
      <View className="items-center justify-center">
        <LensMate />
      </View>
      <View className="items-center mt-6">
        <View className="mb-6">
          <Text className="font-nunito tracking-widest text-2xl text-slate-600">
            Login to your account
          </Text>
        </View>
        <View className="max-w-80 mx-auto w-11/12 gap-4 mb-6">
          <Input placeholder={"Email"} />
          <Input placeholder={"Password"} />
        </View>
        <View className="max-w-80 mx-auto w-11/12 mb-10">
          <ButtonValidation>Sign In</ButtonValidation>
        </View>
        <View className="items-center justify-center mt-6">
          <Text className="text-slate-600 font-nunito text-sm tracking-widest">
            - or sign in with -
          </Text>
        </View>
        <View className="flex-row gap-6 items-center justify-center mt-6 mb-16">
          <Image source={require("../assets/images/google.png")} />
          <Image source={require("../assets/images/facebook.png")} />
        </View>
        <View className="items-center justify-center mt-6">
          <Text className="text-slate-600 font-nunito text-sm tracking-widest">
            Don't have an account?{" "}
            <Text className="text-blue-500">Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
