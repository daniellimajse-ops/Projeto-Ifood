import { Image, Pressable, Text, View } from 'react-native';
import { RestaurantsProps } from '..';

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable style={{ marginRight: 14 }}>
      <Image
        source={{ uri: item.image }}
        style={{
          width: 140,
          height: 100,
          borderRadius: 10,
        }}
      />

      <View style={{ marginTop: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
}