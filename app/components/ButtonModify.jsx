import { View, TouchableOpacity, Text } from "react-native";

export default function ButtonModify() {
  return (
    <View className="w-full flex items-center">
      <TouchableOpacity
        className=" bg-blue-500 rounded-lg hover:shadow-lg active:shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 items-center justify-center px-2 py-1"
        title="Modify"
      >
        <Text className="text-white text-sm font-nunito">Modify</Text>
      </TouchableOpacity>
    </View>
  );
}
