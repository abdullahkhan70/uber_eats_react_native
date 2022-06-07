import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {labels} from '../../utils/strings';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import {setViewCartModal} from '../../utils/redux/slices/resturantSlice';

const ViewCartButton = () => {
  const dispatch = useAppDispatch();
  const selViewCartModal = useAppSelector(
    state => state?.resturantSlice?.viewCartModal,
  );
  const selSelectedMenuItems = useAppSelector(
    state => state?.resturantSlice?.selectedMenuItems,
  );
  let totalPrice = selSelectedMenuItems
    .map(item => Number(item?.price))
    .reduce((prev, curr) => prev + curr, 0);

  const handleViewCartBtn = () => {
    dispatch(setViewCartModal(Boolean(!selViewCartModal)));
  };
  return (
    <View style={styles.viewCartMainView}>
      <TouchableOpacity style={styles.viewCartBtn} onPress={handleViewCartBtn}>
        <Text style={styles.viewCartText}>{labels.viewCart}</Text>
        <Text style={styles.addToCartTotalPrice}>
          {totalPrice > 0 ? '$ ' + totalPrice : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCartButton;
