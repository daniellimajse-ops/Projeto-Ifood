import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export function Search() {
  return (
    <View
      style={{
        width: "100%",
        height: 56,
        borderWidth: 1,
        borderColor: "#94a3b8",
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 16,
        backgroundColor: "transparent",
      }}
    >
      <Feather name="search" size={22} color="#64748b" />

      <TextInput
        placeholder="Procure sua comida..."
        placeholderTextColor="#64748b"
        style={{
          flex: 1,
          height: "100%",
          marginLeft: 10,
          color: "#0f172a",
          fontSize: 15,
        }}
      />
    </View>
  );
}