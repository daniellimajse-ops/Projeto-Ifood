import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export function CardHorizontalFood({ food }) {
  return (
    <Pressable style={{ marginRight: 16 }}>
      
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: food.image }}
          style={{ width: 176, height: 144, borderRadius: 12 }}
        />

        <View
          style={{
            position: "absolute",
            top: 8,
            right: 12,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(23, 23, 23, 0.9)",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 999,
          }}
        >
          <Ionicons name="star" size={13} color="#ca8a04" />
          <Text style={{ color: "#fff", fontSize: 12, marginLeft: 4 }}>
            {food.rating}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 8 }}>
        <Text style={{ color: "#15803d", fontSize: 18, fontWeight: "500" }}>
          R$ {food.price}
        </Text>

        <Text style={{ color: "#000", marginTop: 4 }}>
          {food.name}
        </Text>

        <Text style={{ color: "#525252", fontSize: 12, marginTop: 4 }}>
          {food.time} - R$ {food.delivery}
        </Text>
      </View>

    </Pressable>
  );
}