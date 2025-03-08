import { TouchableOpacity, Text, View } from "react-native";

export default function ButtonValidation({ children }) {
  return (
    <View className="max-w-80 mx-auto w-11/12">
      <TouchableOpacity className="h-14 bg-blue-500 rounded-lg shadow-md hover:shadow-lg active:shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 items-center justify-center">
        <Text className="text-white font-semibold text-lg font-nunito">
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
