import { View, Text, TextInput } from "react-native";

export default function Login() {
  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="font-rubik tracking-widest text-4xl">LENS MATE</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="font-nunito tracking-widest text-2xl">
          Login to your account
        </Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <TextInput
          className="border-2 border-gray-300 rounded-md p-2 w-80"
          placeholder="Email"
        />
        <TextInput
          className="border-2 border-gray-300 rounded-md p-2 w-80"
          placeholder="Password"
        />
      </View>
    </>
  );
}
