import * as React from "react";
import { Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore, { AccountState } from "../store";

export default function Index() {
  const [days, setDays] = useState(0);
  const prenom = useStore((state: AccountState) => state.prenom); // Utilise useStore
  const setPrenom = useStore((state: AccountState) => state.setPrenom);

  const handleClick = () => {
    setDays(days + 1);
  };
  const handleReset = () => {
    setDays(0);
  };

  const getColor = (days: number) => {
    if (days <= 0) {
      return "white";
    }
    if (days > 31) {
      return "red";
    }

    const startLightness = 100;
    const endLightness = 50;

    const lightness =
      startLightness - (startLightness - endLightness) * (days / 31);

    return `hsl(0, 100%, ${lightness}%)`;
  };

  useEffect(() => {
    const getPrenom = async () => {
      try {
        const prenom = await AsyncStorage.getItem("prenom");
        if (prenom) {
          setPrenom(prenom);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du prénom :", error);
      }
    };

    getPrenom();
  }, []);

  return (
    <View className="flex-1 gap-8">
      <View className="items-center mt-12">
        <Text className="text-slate-900 font-nunito tracking-widest text-4xl">
          Bonjour {prenom} !
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
          iconColor={getColor(days)}
          className="shadow-md"
          containerColor="#3b82f6"
          size={200}
          onPress={handleClick}
        />
        <Text
          className="font-nunito text-xl font-semibold tracking-widest uppercase"
          style={{ color: days >= 31 ? "red" : "" }}
        >
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
