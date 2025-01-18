import { Text, View, Button } from "react-native";
import { Link, Stack } from "expo-router";

const Index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }}></Stack.Screen>
      <Text style={{ fontFamily: "AmaticSC_700Bold", fontSize: 50 }}>
        Markdown
      </Text>

      <Link href={"/day3/editor"} asChild>
        <Button title="Go To Editor" />
      </Link>
    </View>
  );
};

export default Index;
