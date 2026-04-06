import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { RestaurantsProps } from "..";

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}
      />

      <View style={{ gap: 4 }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {item.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Ionicons name="star" size={14} color="#ca8a04" />
          
          <Text
            style={{
              fontSize: 14,
              color: "#555",
            }}
          >
            {item.rating ?? "4.5"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}