import { View, TextInput } from "react-native";

export default function Input({ placeholder }) {
  return (
    <View className="max-w-80 mx-auto w-11/12">
      <TextInput
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md text-base
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        placeholder={placeholder}
      />
    </View>
  );
}
