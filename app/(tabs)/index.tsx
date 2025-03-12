import * as React from "react";
import { Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useState } from "react";

export default function Index() {
  const [days, setDays] = useState(0);

  const handleClick = () => {
    setDays(days + 1);
  };
  const handleReset = () => {
    setDays(0);
  };
  return (
    <View className="flex-1 gap-8">
      <View className="items-center mt-12">
        <Text className="text-slate-900 font-nunito tracking-widest text-4xl">
          Bonjour John !
        </Text>
      </View>
      <View className="items-center w-full px-5 mt-16">
        <Text className="font-nunito text-gray-600 uppercase text-2xl text-center">
          Validez votre port de lentilles d'un clin d'œil en cliquant ci-dessous
        </Text>
      </View>
      <View className="items-center gap-2 mt-6">
        <IconButton
          icon="eye"
          iconColor="white"
          className="shadow-md"
          containerColor="#3b82f6"
          size={200}
          onPress={handleClick}
        />
        <Text className="font-nunito text-xl font-semibold tracking-widest uppercase">
          {days} jours
        </Text>
      </View>
      <View className="items-center self-center">
        <Button buttonColor="#3b82f6" mode="contained" onPress={handleReset}>
          Reset
        </Button>
      </View>
    </View>
  );
}
