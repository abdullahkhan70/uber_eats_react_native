import {
  View,
  Text,
  FlatList,
  Image,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {dummyMenuItems} from '../../utils/list/dummyMenuItems';
import {styles} from './styles';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import {
  setRemoveAllSelectedMenuItems,
  setRemoveSelectedMenuItems,
  setSelectedMenuItems,
} from '../../utils/redux/slices/resturantSlice';

interface renderItemsProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: number;
  };
  index?: number;
}
type MenuItemsProps = {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }[];
  checkBox: Boolean;
};
const MenuItems = ({data, checkBox}: MenuItemsProps) => {
  const dispatch = useAppDispatch();
  const selSelectedMenuItems = useAppSelector(
    state => state?.resturantSlice?.selectedMenuItems,
  );
  useEffect(() => {
    // console.log('data: ' + JSON.stringify(data));
    const backAction = () => {
      dispatch(setRemoveAllSelectedMenuItems([]));
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const addToCart = (item: renderItemsProps, checkValue: Boolean) => {
    console.log(JSON.stringify(item));
    if (checkValue == true) {
      dispatch(setSelectedMenuItems(item));
    } else {
      dispatch(setRemoveSelectedMenuItems(item?.id));
    }
  };

  const renderItems = ({item, index}: renderItemsProps) => (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={() => console.log(JSON.stringify(selSelectedMenuItems))}>
      <View style={styles.menuItemsMainView}>
        {checkBox == true ? (
          <BouncyCheckbox
            iconStyle={{borderColor: 'lightgray', borderRadius: 4}}
            fillColor={'green'}
            onPress={checkValue => addToCart(item, checkValue)}
          />
        ) : (
          <View />
        )}
        <View>
          <Text style={styles.menuItemTitle} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.menuItemsDescription}>{item?.description}</Text>
          <Text style={styles.menuItemsPrice}>{'$' + item?.price}</Text>
        </View>
        <Image
          source={{uri: item?.image}}
          style={styles.menuItemImage}
          resizeMode={'cover'}
        />
      </View>
    </TouchableOpacity>
  );
  const ItemSeparator = () => {
    return <Divider width={0.5} style={styles.dividered} />;
  };
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        scrollEnabled={true}
        bounces={true}
      />
    </>
  );
};

export default MenuItems;
