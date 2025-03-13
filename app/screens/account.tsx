import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import Input from "../components/Input";
import ButtonValidation from "../components/ButtonValidation";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore, { AccountState } from "../store";
import { useRouter } from "expo-router";

export default function Account() {
  const [localPrenom, setLocalPrenom] = useState("");
  const setPrenom = useStore((state: AccountState) => state.setPrenom);
  const router = useRouter();

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setLocalPrenom(e.nativeEvent.text);
  };
  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("prenom", localPrenom);
      setPrenom(localPrenom);
      router.push("/");
      return null;
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du prénom :", error);
    }
  };

  return (
    <View className="flex-1">
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Votre compte
        </Text>
      </View>
      <View className="max-w-80 mx-auto w-11/12 gap-4 mb-6">
        <Input
          placeholder={"Prénom"}
          value={localPrenom}
          onChange={handleChange}
        />
      </View>
      <View className="max-w-80 mx-auto w-11/12 mb-10 gap-5">
        <ButtonValidation onPress={handleSubmit}>Valider</ButtonValidation>
        <ButtonValidation onPress={() => {}} danger={true}>
          Supprimer le compte
        </ButtonValidation>
      </View>
    </View>
  );
}
