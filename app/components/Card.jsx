import { Text, View } from "react-native";
import ButtonModify from "./ButtonModify";

export default function Card() {
  return (
    <View className="w-full px-5 py-2 h-36 border-2 border-blue-500 rounded-lg">
      <View className="w-full mb-2">
        <Text className="text-black text-3xl font-nunito">General Info</Text>
      </View>
      <View className="flex-1 w-full flex-row">
        <View className="w-3/4">
          <Text className="text-slate-600 text-sm font-nunito">
            Brand: Acuvue
          </Text>
          <Text className="text-slate-600 text-sm font-nunito">
            Diameter : 14.50
          </Text>
          <Text className="text-slate-600 text-sm font-nunito">
            Base Curve : 8.70
          </Text>
        </View>
        <View className="w-1/4 flex justify-end items-end mb-4">
          <ButtonModify />
        </View>
      </View>
    </View>
  );
}
