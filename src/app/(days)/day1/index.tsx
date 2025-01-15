import { Text, View } from "react-native";
import { Stack } from "expo-router";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }}></Stack.Screen>
      <Text style={{ fontFamily: "AmaticSC_700Bold", fontSize: 100 }}>
        Day Details Screen
      </Text>
    </View>
  );
};

export default index;
