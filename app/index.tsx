import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500 font-nunito tracking-widest">
        Test application react native
      </Text>
      <Link href="/screens/login" className="text-blue-500">
        Go to Login
      </Link>
      <Link href="/screens/testComponent" className="text-blue-500">
        Go to TestComponent
      </Link>
    </View>
  );
}
