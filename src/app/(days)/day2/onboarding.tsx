import { Link, router, Stack } from "expo-router";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

import Animated, {
  SlideInLeft,
  FadeIn,
  BounceInLeft,
  BounceInRight,
  FadeOut,
} from "react-native-reanimated";
import { AnimatedText } from "react-native-reanimated/lib/typescript/component/Text";

const OnBoardingSteps = [
  {
    id: 1,
    icons: "snowflake",
    title: "Track every transaction",
    description:
      "Monitor your spending in the daily and make sure you optimize your finance",
  },
  {
    id: 2,
    icons: "people-arrows",
    title: "you dont know how to start?",
    description:
      "  We have a big team ready to help you to find the most fast way to show you how can you optimize your finance!",
  },
  { id: 3, icons: "question", title: "aaaaa", description: "aaaaa" },
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

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      lastScren();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style={"light"}></StatusBar>

      <View style={styles.stepIndicatorContainer}>
        {OnBoardingSteps.map((step, index) => (
          <View
            key={step.id}
            style={[
              styles.stepIndicator,
              { backgroundColor: index == screenIndex ? "#cef202" : "gray" },
            ]}
          ></View>
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View style={styles.content} key={screenIndex}>
          <Animated.View
            entering={FadeIn.delay(50)}
            exiting={FadeOut.delay(50)}
          >
            <FontAwesome5
              style={styles.image}
              name={data.icons}
              size={150}
              color="#cef202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text entering={SlideInLeft} style={styles.title}>
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInLeft.delay(50)}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonRow}>
              <Text style={styles.buttonText}>Skip</Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141a",
  },
  image: { alignSelf: "center", marginTop: 70, margin: 20 },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "Inter_900Black",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    fontFamily: "Inter_400Regular",
    color: "gray",
    fontSize: 20,
    lineHeight: 27,
  },
  footer: { marginTop: "auto" },
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
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
    marginTop: 45,
  },
  stepIndicator: {
    backgroundColor: "gray",
    flex: 1,
    height: 3,
    borderRadius: 10,
  },
});
