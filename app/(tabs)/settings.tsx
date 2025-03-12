import { View, Text, StyleSheet } from "react-native";
import CardSettings from "../components/CardSettings";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  return (
    <>
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Settings
        </Text>
      </View>
      <View className="flex-1 px-5 gap-4">
        <CardSettings
          title="Votre compte"
          icone="sliders"
          onPress={() => router.push("/screens/account")}
        />
        <CardSettings
          title="Paramètres lentilles"
          icone="eye"
          onPress={() => router.push("/screens/lensSettings")}
        />
        <CardSettings
          title="Contactez-nous"
          icone="envelope"
          onPress={() => router.push("/screens/contactUs")}
        />
        <CardSettings
          title="Déconnexion"
          icone="sign-out"
          onPress={() => router.push("/screens/logOut")}
        />
      </View>
    </>
  );
}
