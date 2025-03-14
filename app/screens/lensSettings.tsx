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
  const [localDiametre, setLocalDiametre] = useState("");
  const [localRayon, setLocalRayon] = useState("");
  const [localPuissanceOG, setLocalPuissanceOG] = useState("");
  const [localPuissanceOD, setLocalPuissanceOD] = useState("");
  const [localCylindreOG, setLocalCylindreOG] = useState("");
  const [localCylindreOD, setLocalCylindreOD] = useState("");
  const [localAxeOG, setLocalAxeOG] = useState("");
  const [localAxeOD, setLocalAxeOD] = useState("");

  const setMarque = useStore((state: AccountStateLens) => state.setMarque);
  const setDiametre = useStore((state: AccountStateLens) => state.setDiametre);
  const setRayon = useStore((state: AccountStateLens) => state.setRayon);
  const setPuissanceOG = useStore(
    (state: AccountStateLens) => state.setPuissanceOG
  );
  const setPuissanceOD = useStore(
    (state: AccountStateLens) => state.setPuissanceOD
  );
  const setCylindreOG = useStore(
    (state: AccountStateLens) => state.setCylindreOG
  );
  const setCylindreOD = useStore(
    (state: AccountStateLens) => state.setCylindreOD
  );
  const setAxeOG = useStore((state: AccountStateLens) => state.setAxeOG);
  const setAxeOD = useStore((state: AccountStateLens) => state.setAxeOD);

  const router = useRouter();

  const loadDataFromStorage = async (
    key: string,
    setState: (value: string) => void
  ) => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      if (storedValue !== null) {
        setState(storedValue);
      }
    } catch (error) {
      console.error(`Erreur lors du chargement de ${key}:`, error);
    }
  };

  useEffect(() => {
    const loadAllData = async () => {
      await loadDataFromStorage("marque", setLocalMarque);
      await loadDataFromStorage("diametre", setLocalDiametre);
      await loadDataFromStorage("rayon", setLocalRayon);
      await loadDataFromStorage("puissanceOG", setLocalPuissanceOG);
      await loadDataFromStorage("cylindreOG", setLocalCylindreOG);
      await loadDataFromStorage("axeOG", setLocalAxeOG);
      await loadDataFromStorage("puissanceOD", setLocalPuissanceOD);
      await loadDataFromStorage("cylindreOD", setLocalCylindreOD);
      await loadDataFromStorage("axeOD", setLocalAxeOD);
    };

    loadAllData();
  }, []);

  const handleChange =
    (setState: (value: string) => void) =>
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setState(e.nativeEvent.text);
    };

  const handleChangeMarque = handleChange(setLocalMarque);
  const handleChangeDiametre = handleChange(setLocalDiametre);
  const handleChangeRayon = handleChange(setLocalRayon);
  const handleChangePuissanceOG = handleChange(setLocalPuissanceOG);
  const handleChangeCylindreOG = handleChange(setLocalCylindreOG);
  const handleChangeAxeOG = handleChange(setLocalAxeOG);
  const handleChangePuissanceOD = handleChange(setLocalPuissanceOD);
  const handleChangeCylindreOD = handleChange(setLocalCylindreOD);
  const handleChangeAxeOD = handleChange(setLocalAxeOD);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("marque", localMarque);
      await AsyncStorage.setItem("diametre", localDiametre);
      await AsyncStorage.setItem("rayon", localRayon);
      await AsyncStorage.setItem("puissanceOG", localPuissanceOG);
      await AsyncStorage.setItem("cylindreOG", localCylindreOG);
      await AsyncStorage.setItem("axeOG", localAxeOG);
      await AsyncStorage.setItem("puissanceOD", localPuissanceOD);
      await AsyncStorage.setItem("cylindreOD", localCylindreOD);
      await AsyncStorage.setItem("axeOD", localAxeOD);

      setMarque(localMarque);
      setDiametre(localDiametre);
      setRayon(localRayon);
      setPuissanceOG(localPuissanceOG);
      setCylindreOG(localCylindreOG);
      setAxeOG(localAxeOG);
      setPuissanceOD(localPuissanceOD);
      setCylindreOD(localCylindreOD);
      setAxeOD(localAxeOD);

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
          inputMode="text"
        />
      </View>
      <View className="flex-row w-1/3 mx-auto justify-center gap-3 mb-10">
        <Input
          placeholder={"Diamètre"}
          onChange={handleChangeDiametre}
          value={localDiametre}
          inputMode="decimal"
          dataType="decimal"
        />

        <Input
          placeholder={"Rayon"}
          onChange={handleChangeRayon}
          value={localRayon}
          inputMode="decimal"
          dataType="decimal"
        />
      </View>
      <View className="flex-row w-1/3 mx-auto justify-center gap-5">
        <View className="items-center w-full gap-3">
          <Text className="font-nunito font-bold text-xl">OG</Text>
          <Input
            placeholder={"Puissance"}
            onChange={handleChangePuissanceOG}
            value={localPuissanceOG}
            inputMode="decimal"
            dataType="decimal"
          />
          <Input
            placeholder={"Cylindre"}
            onChange={handleChangeCylindreOG}
            value={localCylindreOG}
            inputMode="decimal"
            dataType="decimal"
          />
          <Input
            placeholder={"Axe"}
            onChange={handleChangeAxeOG}
            value={localAxeOG}
            inputMode="decimal"
            dataType="decimal"
          />
        </View>
        <View className="items-center w-full gap-3 mb-12">
          <Text className="font-nunito font-bold text-xl">OD</Text>
          <Input
            placeholder={"Puissance"}
            onChange={handleChangePuissanceOD}
            value={localPuissanceOD}
            inputMode="decimal"
            dataType="decimal"
          />
          <Input
            placeholder={"Cylindre"}
            onChange={handleChangeCylindreOD}
            value={localCylindreOD}
            inputMode="decimal"
            dataType="decimal"
          />
          <Input
            placeholder={"Axe"}
            onChange={handleChangeAxeOD}
            value={localAxeOD}
            inputMode="decimal"
            dataType="decimal"
          />
        </View>
      </View>
      <View className="max-w-80 mx-auto w-11/12">
        <ButtonValidation onPress={handleSubmit}>Valider</ButtonValidation>
      </View>
    </View>
  );
}
