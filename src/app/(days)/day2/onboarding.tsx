import { Link, router, Stack } from "expo-router";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

const OnBoardingSteps = [
  {
    icons: "snowflake",
    title: "Track every transaction",
    description:
      "Monitor your spending in the daily and make sure you optimize your finance",
  },
  {
    icons: "people-arrows",
    title: "you dont know how to start?",
    description:
      "  We have a big team ready to help you to find the most fast way to show you how can you optimize your finance!",
  },
  { icons: "question", title: "aaaaa", description: "aaaaa" },
];

export default function onboarding() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = OnBoardingSteps[screenIndex];
  const onContinue = () => {
    const lastScreen = screenIndex == OnBoardingSteps.length - 1;
    if (lastScreen) {
      lastScren();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const lastScren = () => {
    setScreenIndex(0), router.back();
  };
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <Stack.Screen options={{ headerShown: false }} />
        <FontAwesome5
          style={styles.image}
          name={data.icons}
          size={100}
          color="#cef202"
        />

        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.buttonRow}>
            <Text style={styles.buttonText}>Skip</Text>
            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141a",
  },
  image: { alignSelf: "center", marginTop: 150 },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "Inter_900Black",
    letterSpacing: 1.3,
  },
  description: {
    fontFamily: "Inter_400Regular",
    color: "gray",
    fontSize: 20,
    lineHeight: 27,
  },
  footer: { marginTop: "auto", marginBottom: 10 },
  content: { padding: 20, flex: 1 },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302e38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
});
