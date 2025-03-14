import { View, Text } from "react-native";
import Info from "../components/Info";
import useStore, { AccountStateLens } from "../store/storeLensSettings";

export default function TestComponent() {
  const marque = useStore((state: AccountStateLens) => state.marque);
  const diametre = useStore((state: AccountStateLens) => state.diametre);
  const rayon = useStore((state: AccountStateLens) => state.rayon);
  const puissanceOG = useStore((state: AccountStateLens) => state.puissanceOG);
  const cylindreOG = useStore((state: AccountStateLens) => state.cylindreOG);
  const axeOG = useStore((state: AccountStateLens) => state.axeOG);
  const puissanceOD = useStore((state: AccountStateLens) => state.puissanceOD);
  const cylindreOD = useStore((state: AccountStateLens) => state.cylindreOD);
  const axeOD = useStore((state: AccountStateLens) => state.axeOD);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Vos lentilles
        </Text>
      </View>
      <View className="flex-1 w-full px-4 gap-4">
        <Info
          title="Info générales"
          info1={`Marque : ${marque}`}
          info2={`Diamètre : ${diametre}`}
          info3={`Rayon : ${rayon}`}
        />
        <Info
          title="Oeil Gauche"
          info1={`Puissance : ${puissanceOG}`}
          info2={`Cylindre : ${cylindreOG}`}
          info3={`Axe : ${axeOG}`}
        />
        <Info
          title="Oeil Droit"
          info1={`Puissance : ${puissanceOD}`}
          info2={`Cylindre : ${cylindreOD}`}
          info3={`Axe : ${axeOD}`}
        />
      </View>
    </View>
  );
}
