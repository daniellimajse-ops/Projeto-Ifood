import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function Header() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
      }}
    >
      <Pressable
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#64748b",
          }}
        >
          Localização
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <Feather name="map-pin" size={16} color="#ef4444" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#0f172a",
              marginLeft: 4,
            }}
          >
            Caruaru-PE
          </Text>
        </View>
      </View>

      <Pressable
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}