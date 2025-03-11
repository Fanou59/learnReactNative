import { View, Text, StyleSheet } from "react-native";
import CardSettings from "../components/CardSettings";

export default function Tab() {
  return (
    <>
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Settings
        </Text>
      </View>
      <View className="flex-1 px-5 gap-4">
        <CardSettings title="General settings" icone="sliders" />
        <CardSettings title="Lens settings" icone="eye" />
        <CardSettings title="Contact us" icone="envelope" />
        <CardSettings title="Log out" icone="sign-out" />
      </View>
    </>
  );
}
