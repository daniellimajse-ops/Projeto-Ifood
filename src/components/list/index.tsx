import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { RestaurantItem } from './item';

export interface RestaurantsProps{
  id: string;
  name: string;
  image: string;
    rating?: string;
}

export function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods(){
      const response = await fetch("http://192.168.0.102:3000/restaurants")
      const data = await response.json()
      setRestaurants(data);
    }

    getFoods();
  }, [])

  return (
  <View
    style={{
      paddingHorizontal: 16,
      flex: 1,
      width: "100%",
      height: "100%",
      marginBottom: 44,
    }}
  >
    {restaurants.map((item) => (
      <View key={item.id} style={{ marginBottom: 16 }}>
        <RestaurantItem item={item} />
      </View>
    ))}
  </View>
)}