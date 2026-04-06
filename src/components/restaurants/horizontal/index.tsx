import { Image, Pressable, Text } from 'react-native';
import { RestaurantsProps } from '..';

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
  console.log("ITEM COMPLETO:", item);

  return (
    <Pressable
      className='flex flex-col items-center justify-center'
      onPress={() => console.log("CLICOU NO RESTAURANTE " + item.name)}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40
        }}
      />

      <Text
        className='text-sm mt-2 w-20 text-center leading-4 text-black'
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}