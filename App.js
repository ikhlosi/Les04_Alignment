import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goldContainer} />
      <View style={styles.redContainer} />
      <View style={styles.steelBlueContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  goldContainer: {
    backgroundColor: "gold",
    alignSelf: "flex-start",
    width: 100,
    height: 100,
  },
  redContainer: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
  steelBlueContainer: {
    backgroundColor: "steelblue",
    width: 100,
    height: 100,
  },
});
