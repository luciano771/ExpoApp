import { Link, Stack } from "expo-router";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function onboarding() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <Stack.Screen options={{ headerShown: false }} />
        <FontAwesome5
          style={styles.image}
          name="people-arrows"
          size={100}
          color="#cef202"
        />

        <View style={styles.footer}>
          <Text style={styles.title}>Track every transaction</Text>
          <Text style={styles.description}>
            Monitor your spending in the daily and make sure you optimize your
            finance
          </Text>
          <View style={styles.buttonRow}>
            <Text style={styles.buttonText}>Skip</Text>
            <Link href={"day2/onboarding2"} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </Link>
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
