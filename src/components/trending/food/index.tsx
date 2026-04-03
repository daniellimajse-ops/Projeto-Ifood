import { Image, Pressable, Text } from 'react-native';


import { FoodProps } from '..';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  return (
    <Pressable className='flex flex-col rounded-xl'>
<Image
  source={{ uri: food.image }}
  style={{ width: 176, height: 144, borderRadius: 12 }}
      />
      <Text>{food.name}</Text>
    </Pressable>
  );
}