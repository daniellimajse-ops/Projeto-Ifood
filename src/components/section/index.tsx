import { Pressable, Text, View } from "react-native";

interface Props {
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
  action: () => void;
}

export function Section({ name, size, label, action }: Props) {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 16,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
        {name}
      </Text>

      <Pressable onPress={action}>
        <Text style={{ fontSize: 14, color: "#dc2626" }}>{label}</Text>
      </Pressable>
    </View>
  );
}