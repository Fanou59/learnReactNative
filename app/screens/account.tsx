import { View, Text } from "react-native";
import Input from "../components/Input";
import ButtonValidation from "../components/ButtonValidation";

export default function Account() {
  return (
    <View className="flex-1">
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Account
        </Text>
      </View>
      <View className="max-w-80 mx-auto w-11/12 gap-4 mb-6">
        <Input placeholder={"Surname"} />
      </View>
      <View className="max-w-80 mx-auto w-11/12 mb-10 gap-5">
        <ButtonValidation>Validate</ButtonValidation>
        <ButtonValidation danger={true}>Delete Account</ButtonValidation>
      </View>
    </View>
  );
}
