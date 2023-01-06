import { FlatList, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';


const NavOption = () => {
  const data = [
    {
      id: 123,
      title: "Get a Ride",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png",
      screen: "MapScreen",
    },
    {
      id: 456,
      title: "Order a Food",
      image:
        "https://mcdonalds.com.pk/wp-content/uploads/2022/08/mcd-bigbreakfast-uae-new.png",
      screen: "FoodScreen",
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}>
            <View>
              <Image
                style={{ width: 150, height: 150, resizeMode: "contain" }}
                source={{
                  uri: item.image,
                }}
              />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOption;
