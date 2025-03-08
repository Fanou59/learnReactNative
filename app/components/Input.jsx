import { View, TextInput } from "react-native";

export default function Input({ placeholder }) {
  return (
    <View className="max-w-80 mx-auto w-11/12">
      <TextInput
        className="w-full px-4 h-12 border border-gray-300 rounded-lg shadow-md text-base
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 font-nunito leading-5"
        placeholder={placeholder}
        secureTextEntry={placeholder === "Password"}
        keyboardType={placeholder === "Email" ? "email-address" : "default"}
        type="text"
        autoCapitalize={placeholder === "Email" ? "none" : "sentences"}
        autoCorrect={placeholder === "Email" ? false : true}
      />
    </View>
  );
}
