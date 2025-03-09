import { View, Text } from "react-native";
import Card from "../components/Card";

export default function TestComponent() {
  return (
    <View className="flex-1 items-center">
      <View className="items center justify-center">
        <Text className="font-nunito tracking-widest text-2xl text-slate-600">
          Screen for testing components
        </Text>
      </View>
      <View className="w-full items-center justify-center mt-6 px-6">
        <Card />
      </View>
    </View>
  );
}
