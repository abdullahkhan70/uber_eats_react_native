import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {labels} from '../../utils/strings';
import {styles} from './styles';
import {useAppSelector} from '../../utils/redux/hook';

const ViewCartButton = () => {
  const selSelectedMenuItems = useAppSelector(
    state => state?.resturantSlice?.selectedMenuItems,
  );
  let totalPrice = selSelectedMenuItems
    .map(item => Number(item?.price))
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <View style={styles.viewCartMainView}>
      <TouchableOpacity style={styles.viewCartBtn}>
        <Text style={styles.viewCartText}>{labels.viewCart}</Text>
        <Text style={styles.addToCartTotalPrice}>
          {totalPrice > 0 ? '$ ' + totalPrice : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCartButton;
