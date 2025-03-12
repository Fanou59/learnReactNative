import { TextInput } from "react-native";

export default function Input({ placeholder }) {
  return (
    <TextInput
      className="w-full px-4 h-12 border border-gray-300 rounded-lg shadow-md text-base
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 font-nunito leading-5 text-gray-800"
      placeholder={placeholder}
      secureTextEntry={placeholder === "Password"}
      keyboardType={placeholder === "Email" ? "email-address" : "default"}
      type="text"
      autoCapitalize={placeholder === "Email" ? "none" : "sentences"}
      autoCorrect={placeholder === "Email" ? false : true}
    />
  );
}
