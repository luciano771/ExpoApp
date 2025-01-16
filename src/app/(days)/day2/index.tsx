import { Text, View, Button } from "react-native";
import { Link, Stack } from "expo-router";

const Index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }}></Stack.Screen>
      <Text style={{ fontFamily: "AmaticSC_700Bold", fontSize: 50 }}>
        Day Details Screen
      </Text>

      <Link href={"/day2/onboarding"} asChild>
        <Button title="Go To Onboarding" />
      </Link>
    </View>
  );
};

export default Index;
