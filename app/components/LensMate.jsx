import { Text, View } from "react-native";

export default function LensMate() {
  return (
    <View className="relative">
      <View
        className="absolute left-1/4 bottom-[10px] w-2/5 h-0.5 bg-black"
        style={{ transform: [{ translateX: -18 }, { translateY: 12 }] }}
      />
      <Text className="font-rubik text-4xl uppercase tracking-widest">
        Lens Mate
      </Text>
    </View>
  );
}
