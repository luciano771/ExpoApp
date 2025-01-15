import { useCallback, useEffect, useState } from "react";
import DayListItem from "./src/components/core/DayListItem";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";

import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    AmaticSC_700Bold,
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
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: { gap: 20, padding: 10 },
  column: { gap: 10 },
});
