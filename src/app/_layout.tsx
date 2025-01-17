import { Stack } from "expo-router";
import { useEffect } from "react";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";

import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import {
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    AmaticSC_700Bold,
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          title: "ExpoApp",
          headerStyle: { backgroundColor: "#F9EDE3" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "ExpoApp" }}
        ></Stack.Screen>
      </Stack>
    </GestureHandlerRootView>
  );
}
