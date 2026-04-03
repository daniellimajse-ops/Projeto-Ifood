import { Dimensions, Image, ScrollView, View } from "react-native";

const { width } = Dimensions.get("window");
const bannerWidth = width - 32;

export function Banner() {
  return (
    <View className="w-full mt-5 mb-4">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/banner1.png")}
          style={{
            width: bannerWidth,
            height: 140,
            borderRadius: 16,
            marginRight: 12,
          }}
          resizeMode="cover"
        />

        <Image
          source={require("../../assets/banner2.png")}
          style={{
            width: bannerWidth,
            height: 140,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  );
}