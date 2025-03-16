import {
  View,
  Text,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from '../components/Input';
import ButtonValidation from '../components/ButtonValidation';
import { useEffect, useState } from 'react';

import useStore, { AccountStateLens } from '../store/storeLensSettings';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Hook personnalisé pour gérer AsyncStorage
const useAsyncStorage = (keys: string[]) => {
  const loadData = async (): Promise<{ [key: string]: string }> => {
    const data: { [key: string]: string } = {};
    for (const key of keys) {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        data[key] = value;
      }
    }
    return data;
  };

  const saveData = async (data: { [key: string]: string }) => {
    for (const [key, value] of Object.entries(data)) {
      await AsyncStorage.setItem(key, value);
    }
  };

  return { loadData, saveData };
};

export default function LensSettings() {
  const initalState = {
    marque: '',
    diametre: '',
    rayon: '',
    puissanceOG: '',
    puissanceOD: '',
    cylindreOD: '',
    cylindreOG: '',
    axeOD: '',
    axeOG: '',
  };

  const { loadData, saveData } = useAsyncStorage([
    'marque',
    'diametre',
    'rayon',
    'puissanceOG',
    'cylindreOG',
    'axeOG',
    'puissanceOD',
    'cylindreOD',
    'axeOD',
  ]);

  const [localState, setLocalState] = useState(initalState);

  const setMarque = useStore((state: AccountStateLens) => state.setMarque);
  const setDiametre = useStore((state: AccountStateLens) => state.setDiametre);
  const setRayon = useStore((state: AccountStateLens) => state.setRayon);
  const setPuissanceOG = useStore((state: AccountStateLens) => state.setPuissanceOG);
  const setPuissanceOD = useStore((state: AccountStateLens) => state.setPuissanceOD);
  const setCylindreOG = useStore((state: AccountStateLens) => state.setCylindreOG);
  const setCylindreOD = useStore((state: AccountStateLens) => state.setCylindreOD);
  const setAxeOG = useStore((state: AccountStateLens) => state.setAxeOG);
  const setAxeOD = useStore((state: AccountStateLens) => state.setAxeOD);

  const router = useRouter();

  useEffect(() => {
    const loadAllData = async () => {
      const data = await loadData();
      setLocalState((prevState) => ({ ...prevState, ...data }));
    };

    loadAllData();
  }, []);

  const handleChange = (key: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setLocalState((prevState) => ({ ...prevState, [key]: e.nativeEvent.text }));
  };

  const handleSubmit = async () => {
    try {
      await saveData(localState);

      setMarque(localState.marque);
      setDiametre(localState.diametre);
      setRayon(localState.rayon);
      setPuissanceOG(localState.puissanceOG);
      setCylindreOG(localState.cylindreOG);
      setAxeOG(localState.axeOG);
      setPuissanceOD(localState.puissanceOD);
      setCylindreOD(localState.cylindreOD);
      setAxeOD(localState.axeOD);

      router.push('/(tabs)/medicalInfo');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="">
        <View className="w-full items center justify-center mb-11 mt-10">
          <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
            Vos lentilles
          </Text>
        </View>
        <View className="max-w-80 mx-auto w-11/12 gap-4 mb-6">
          <Input
            placeholder={'Marque'}
            onChange={handleChange('marque')}
            value={localState.marque}
            inputMode="text"
          />
        </View>
        <View className="flex-row w-1/3 mx-auto justify-center gap-3 mb-10">
          <Input
            placeholder={'Diamètre'}
            onChange={handleChange('diametre')}
            value={localState.diametre}
            inputMode="decimal"
            dataType="decimal"
          />

          <Input
            placeholder={'Rayon'}
            onChange={handleChange('rayon')}
            value={localState.rayon}
            inputMode="decimal"
            dataType="decimal"
          />
        </View>
        <View className="flex-row w-1/3 mx-auto justify-center gap-5">
          <View className="items-center w-full gap-3">
            <Text className="font-nunito font-bold text-xl">OG</Text>
            <Input
              placeholder={'Puissance'}
              onChange={handleChange('puissanceOG')}
              value={localState.puissanceOG}
              inputMode="decimal"
              dataType="decimal"
            />
            <Input
              placeholder={'Cylindre'}
              onChange={handleChange('cylindreOG')}
              value={localState.cylindreOG}
              inputMode="decimal"
              dataType="decimal"
            />
            <Input
              placeholder={'Axe'}
              onChange={handleChange('axeOG')}
              value={localState.axeOG}
              inputMode="decimal"
              dataType="decimal"
            />
          </View>
          <View className="items-center w-full gap-3 mb-12">
            <Text className="font-nunito font-bold text-xl">OD</Text>
            <Input
              placeholder={'Puissance'}
              onChange={handleChange('puissanceOD')}
              value={localState.puissanceOD}
              inputMode="decimal"
              dataType="decimal"
            />
            <Input
              placeholder={'Cylindre'}
              onChange={handleChange('cylindreOD')}
              value={localState.cylindreOD}
              inputMode="decimal"
              dataType="decimal"
            />
            <Input
              placeholder={'Axe'}
              onChange={handleChange('axeOD')}
              value={localState.axeOD}
              inputMode="decimal"
              dataType="decimal"
            />
          </View>
        </View>
        <View className="max-w-80 mx-auto w-11/12">
          <ButtonValidation onPress={handleSubmit}>Valider</ButtonValidation>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
