import { View, Text } from "react-native";
import Info from "../components/Info";

export default function TestComponent() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items center justify-center mb-11 mt-10">
        <Text className="font-nunito tracking-widest text-4xl text-slate-800 uppercase text-center">
          Medical Info
        </Text>
      </View>
      <View className="flex-1 w-full px-4 gap-4">
        <Info
          title="General Info"
          info1="Brand : Acuvue"
          info2="Diameter : 14.50"
          info3="Base curve : 8.70"
        />
        <Info
          title="General Info"
          info1="Brand : Acuvue"
          info2="Diameter : 14.50"
          info3="Base curve : 8.70"
        />
        <Info
          title="General Info"
          info1="Brand : Acuvue"
          info2="Diameter : 14.50"
          info3="Base curve : 8.70"
        />
      </View>
    </View>
  );
}
