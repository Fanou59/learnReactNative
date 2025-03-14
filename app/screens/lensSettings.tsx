import { View, Text } from "react-native";
import Input from "../components/Input";

export default function LensSettings() {
  return (
    <View className="">
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Vos lentilles
        </Text>
      </View>
      <View className="max-w-80 mx-auto w-11/12 gap-4 mb-6">
        <Input placeholder={"Marque"} />
      </View>
      <View className="flex-row w-1/3 mx-auto justify-center gap-3 mb-10">
        <Input placeholder={"Diamètre"} />
        <Input placeholder={"Rayon"} />
      </View>
      <View className="flex-row w-1/3 mx-auto justify-center gap-5">
        <View className="items-center w-full gap-3">
          <Text className="font-nunito font-bold text-xl">OG</Text>
          <Input placeholder={"Puissance"} />
          <Input placeholder={"Cylindre"} />
          <Input placeholder={"Axe"} />
        </View>
        <View className="items-center w-full gap-3">
          <Text className="font-nunito font-bold text-xl">OD</Text>
          <Input placeholder={"Puissance"} />
          <Input placeholder={"Cylindre"} />
          <Input placeholder={"Axe"} />
        </View>
      </View>
    </View>
  );
}
