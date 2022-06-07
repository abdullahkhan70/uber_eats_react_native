import {View, Text, BackHandler, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import AnimatedLottieView from 'lottie-react-native';
import {styles} from './styles';
import firebase from '@react-native-firebase/firestore';
import {
  setOrderData,
  setRemoveAllOrderData,
} from '../../utils/redux/slices/resturantSlice';
import MenuItems from '../ResturantDetails/MenuItems';

const OrderDetails = () => {
  const dispatch = useAppDispatch();
  const selSelectedMenuItems = useAppSelector(
    state => state?.resturantSlice?.selectedMenuItems,
  );
  const selAboutData = useAppSelector(
    state => state?.resturantSlice?.aboutData,
  );
  const selOrderData = useAppSelector(
    state => state?.resturantSlice?.orderData,
  );
  let totalPrice = selSelectedMenuItems
    .map(item => Number(item?.price))
    .reduce((prev, curr) => prev + curr, 0);
  const callFirebaseData = async () => {
    await firebase()
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapShot => {
        snapShot.docs.map(doc => {
          dispatch(setOrderData(doc.data().items));
          console.log('SnapShot: ' + JSON.stringify(doc.data().items[0]));
        });
      });
  };
  useEffect(() => {
    callFirebaseData();
    const backAction = () => {
      dispatch(setRemoveAllOrderData([]));
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <AnimatedLottieView
        style={styles.checkMarkAnimation}
        source={require('../../../assets/animations/check-mark.json')}
        autoPlay
        loop={false}
      />
      <Text style={styles.totalPrice}>
        Your order {selAboutData.name} has been placed for {totalPrice}
      </Text>
      {console.log('Order Data: ' + JSON.stringify(selOrderData[0]))}
      <ScrollView>
        <MenuItems data={selOrderData[0]} checkBox={false} />
        <AnimatedLottieView
          style={styles.checkMarkAnimation}
          source={require('../../../assets/animations/cooking.json')}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
