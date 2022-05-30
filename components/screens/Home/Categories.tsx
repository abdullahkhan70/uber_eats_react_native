import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {categories} from '../../utils/list/categories';
import {styles} from './styles';

interface renderItemsProps {
  item: {
    image: number;
    title: string;
  };
  index: number;
}

const Categories = () => {
  const renderItems = ({item, index}: renderItemsProps) => (
    <TouchableOpacity style={styles.categoryBtn} key={index}>
      <View>
        <Image source={item?.image} style={styles.categoryIcons} />
        <Text style={styles.categoryTitle}>{item?.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList
        style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(5)}}
        data={categories}
        renderItem={renderItems}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default Categories;
