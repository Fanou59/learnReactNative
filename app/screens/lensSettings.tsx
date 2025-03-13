import {
  View,
  Text,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import Input from "../components/Input";
import ButtonValidation from "../components/ButtonValidation";
import { useEffect, useState } from "react";

import useStore, { AccountStateLens } from "../store/storeLensSettings";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LensSettings() {
  const [localMarque, setLocalMarque] = useState("");
  const [localDiametre, setLocalDiametre] = useState<string>("0");
  const [localRayon, setLocalRayon] = useState<string>("0");
  const marque = useStore((state: AccountStateLens) => state.marque);
  const setMarque = useStore((state: AccountStateLens) => state.setMarque);
  const diametre = useStore((state: AccountStateLens) => state.diametre);
  const setDiametre = useStore((state: AccountStateLens) => state.setDiametre);
  const rayon = useStore((state: AccountStateLens) => state.rayon);
  const setRayon = useStore((state: AccountStateLens) => state.setRayon);
  const router = useRouter();

  useEffect(() => {
    setLocalMarque(marque);
    setLocalDiametre(String(diametre));
    setLocalRayon(String(rayon));
  }, []);

  const handleChangeMarque = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setLocalMarque(e.nativeEvent.text);
  };
  const handleChangeDiametre = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const inputValue = e.nativeEvent.text;
    setLocalDiametre(inputValue);
    const numericValue = parseFloat(inputValue.replace(",", "."));

    if (!isNaN(numericValue)) {
      setDiametre(numericValue);
    } else if (inputValue === "") {
      setDiametre(0);
    } else {
      console.warn("Invalid input for Diamètre");
    }
  };
  const handleChangeRayon = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const inputValue = e.nativeEvent.text;
    setLocalRayon(inputValue);
    const numericValue = parseFloat(inputValue.replace(",", "."));

    if (!isNaN(numericValue)) {
      setRayon(numericValue);
    } else if (inputValue === "") {
      setRayon(0);
    } else {
      console.warn("Invalid input for Rayon");
    }
  };

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("marque", localMarque);
      setMarque(localMarque);
      setDiametre(localDiametre);
      setRayon(localRayon);
      router.push("/(tabs)/medicalInfo");
      return null;
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des données:", error);
    }
  };

  return (
    <View className="">
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Vos lentilles
        </Text>
      </View>
      <View className="max-w-80 mx-auto w-11/12 gap-4 mb-6">
        <Input
          placeholder={"Marque"}
          onChange={handleChangeMarque}
          value={localMarque}
        />
      </View>
      <View className="flex-row w-1/3 mx-auto justify-center gap-3 mb-10">
        <Input
          placeholder={"Diamètre"}
          onChange={handleChangeDiametre}
          value={String(localDiametre)}
          keyboardType="decimal-pad"
          dataType="decimal"
        />

        <Input
          placeholder={"Rayon"}
          onChange={handleChangeRayon}
          value={String(localRayon)}
          keyboardType="decimal-pad"
          dataType="decimal"
        />
      </View>
      <View className="flex-row w-1/3 mx-auto justify-center gap-5">
        <View className="items-center w-full gap-3">
          <Text className="font-nunito font-bold text-xl">OG</Text>
          <Input placeholder={"Puissance"} onChange={() => {}} value={""} />
          <Input placeholder={"Cylindre"} onChange={() => {}} value={""} />
          <Input placeholder={"Axe"} onChange={() => {}} value={""} />
        </View>
        <View className="items-center w-full gap-3 mb-12">
          <Text className="font-nunito font-bold text-xl">OD</Text>
          <Input placeholder={"Puissance"} onChange={() => {}} value={""} />
          <Input placeholder={"Cylindre"} onChange={() => {}} value={""} />
          <Input placeholder={"Axe"} onChange={() => {}} value={""} />
        </View>
      </View>
      <View className="max-w-80 mx-auto w-11/12">
        <ButtonValidation onPress={handleSubmit}>Valider</ButtonValidation>
      </View>
    </View>
  );
}
