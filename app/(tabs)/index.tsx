import * as React from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function Index() {
  return (
    <View className="flex-1 gap-8">
      <View className="items-center mt-12">
        <Text className="text-slate-900 font-nunito tracking-widest text-4xl">
          Hi John !
        </Text>
      </View>
      <View className="items-center w-full px-5">
        <Text className="font-nunito text-gray-600 uppercase text-2xl text-center">
          Confirm your lens ware by clicking on the eye below
        </Text>
      </View>
      <View className="items-center gap-1">
        <IconButton
          icon="eye"
          iconColor="white"
          className="shadow-md"
          containerColor="#3b82f6"
          size={200}
          onPress={() => console.log("Pressed")}
        />
        <Text className="font-nunito text-xl font-semibold tracking-widest">
          23 Days
        </Text>
      </View>
    </View>
  );
}
