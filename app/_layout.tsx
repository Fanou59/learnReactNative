import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="screens/account" options={{ title: "Account" }} />
      <Stack.Screen
        name="screens/lensSettings"
        options={{ title: "LensSettings" }}
      />
      <Stack.Screen
        name="screens/contactUs"
        options={{ title: "Contact Us" }}
      />
      <Stack.Screen name="screens/logOut" options={{ title: "Log Out" }} />
    </Stack>
  );
}
