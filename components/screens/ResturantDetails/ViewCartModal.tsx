import {View, Text, FlatList, PixelRatio, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import Modal from 'react-native-modal';
import {
  setLoading,
  setViewCartModal,
} from '../../utils/redux/slices/resturantSlice';
import {styles} from './styles';
import {Divider} from 'react-native-elements';
import {colors} from '../../utils/colors';
import {labels, screens} from '../../utils/strings';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
interface renderItemsProps {
  item: {title: string; price: number};
  index: number;
}
const ViewCartModal = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const selViewCartModal = useAppSelector(
    state => state?.resturantSlice?.viewCartModal,
  );
  const hideModal = () => {
    dispatch(setViewCartModal(Boolean(false)));
  };
  const selAboutData = useAppSelector(
    state => state?.resturantSlice?.aboutData,
  );
  const selSelectedMenuItems = useAppSelector(
    state => state?.resturantSlice?.selectedMenuItems,
  );
  const selLoading = useAppSelector(state => state?.resturantSlice?.loading);
  let totalPrice = selSelectedMenuItems
    .map(item => Number(item?.price))
    .reduce((prev, curr) => prev + curr, 0);

  const handleCheckout = async () => {
    hideModal();
    dispatch(setLoading(Boolean(true)));
    const usersCollection = await firestore()
      .collection('orders')
      .add({
        items: selSelectedMenuItems,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          console.log(usersCollection);

          dispatch(setLoading(Boolean(false)));
          navigation.navigate(screens.ORDERCOMPLETED);
        }, 2500);
      });
  };

  const renderItems = ({item, index}: renderItemsProps) => (
    <View style={styles.viewCartModalRenderItemsMainView}>
      <Text
        style={styles.viewCartModalTitle}
        numberOfLines={1}
        ellipsizeMode="tail">
        {item?.title}
      </Text>
      <Text style={styles.viewCartModalPrice}>{'$ ' + item?.price}</Text>
    </View>
  );
  const itemSeparatorComponent = () => (
    <Divider
      width={0.7}
      color={colors.black}
      style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(4)}}
    />
  );
  const ListFooterComponent = () => {
    return (
      <View>
        <View style={styles.viewCartModalRenderItemsMainView}>
          <Text
            style={styles.viewCartModalTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {labels.subTotal}
          </Text>
          <Text style={styles.viewCartModalPrice}>{'$ ' + totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewCartModalCheckOutBtn}
          onPress={handleCheckout}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.checkOutText}>{labels.checkOut}</Text>
            <Text style={styles.viewCartModalPrice}>{'$ ' + totalPrice}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <Modal
        isVisible={selViewCartModal}
        statusBarTranslucent
        style={{margin: 0}}
        animationOut="slideInDown"
        onBackdropPress={hideModal}>
        <View style={styles.modalMainView}>
          <Text style={styles.resturantNameText}>{selAboutData?.name}</Text>
          <FlatList
            renderItem={renderItems}
            data={selSelectedMenuItems}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={itemSeparatorComponent}
            ListFooterComponent={ListFooterComponent}
          />
        </View>
      </Modal>
    </>
  );
};

export default ViewCartModal;
