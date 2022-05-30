import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  PixelRatio,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {dummyResturantItems} from '../../utils/list/dummyResturantItems';
import {styles} from './styles';
import SearchbarButtons from './SearchbarButtons';
import {colors} from '../../utils/colors';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import {
  setHeart,
  setResturantData,
} from '../../utils/redux/slices/resturantSlice';
import {endpoints} from '../../utils/strings';
import axios from 'axios';
import {YELP_API_KEY} from 'react-native-dotenv';
interface renderItemsProps {
  item: {
    image: number;
    title: string;
    waitTiming: string;
    queue: number;
    image_url: string;
  };
  index: number;
}

interface RestaurantItemsProps {
  item: {
    image_url: string;
    name: string;
    rating: number;
    review_count: number;
  };
  index: number;
}
const RestaurantItems = () => {
  const heart = useAppSelector(state => state.resturantSlice.heart);
  const resturantData = useAppSelector(
    state => state.resturantSlice.resturantData,
  );
  const homeToolbarText = useAppSelector(
    state => state.homeToolbarSlice.homeToolbarText,
  );
  const dispatch = useAppDispatch();
  const handleHeart = () => {
    dispatch(setHeart(Boolean(!heart)));
  };

  const resturantApi = async () => {
    const instance = axios.create({
      headers: {Authorization: 'Bearer ' + YELP_API_KEY},
    });

    instance.get(endpoints.resturant_url).then(response => {
      // console.log(response.data.businesses);
      dispatch(
        setResturantData(
          response.data.businesses.filter((data: any) =>
            data.transactions.includes(
              homeToolbarText.toString().toLowerCase(),
            ),
          ),
        ),
      );
    });
  };
  useEffect(() => {
    resturantApi();
    // let data = resturantData[0].filter((data: any) =>
    //   data.transactions.includes(homeToolbarText.toLowerCase()),
    // );
    console.log(`Resturant Data: ${JSON.stringify(resturantData)}`);
  }, [homeToolbarText]);
  const renderItems = ({item, index}: RestaurantItemsProps) => (
    <TouchableOpacity key={index} style={styles.restaurantMainView}>
      <View>
        <ImageBackground
          source={{uri: item?.image_url}}
          resizeMode={'contain'}
          style={styles.restaurantImage}
          imageStyle={styles.restaurantImageStyle}>
          {heart == false ? (
            <SearchbarButtons
              iconBelong="AntDesign"
              iconName="hearto"
              size={24}
              color={colors.white}
              style={{
                alignItems: 'flex-end',
                margin: PixelRatio.getPixelSizeForLayoutSize(7),
              }}
              onPress={handleHeart}
            />
          ) : (
            <SearchbarButtons
              iconBelong="AntDesign"
              iconName="heart"
              size={24}
              color={colors.white}
              style={{
                alignItems: 'flex-end',
                margin: PixelRatio.getPixelSizeForLayoutSize(7),
              }}
              onPress={handleHeart}
            />
          )}
        </ImageBackground>
        <Text
          style={styles.restaurantTitle}
          ellipsizeMode={'tail'}
          lineBreakMode={'tail'}
          numberOfLines={1}>
          {item?.name}
        </Text>
        <View style={styles.restaurantWaitingView}>
          <Text style={styles.restaurantWaitingTimingText}>
            {item?.review_count}
          </Text>
          <View style={styles.restaurantQueueView}>
            <Text style={styles.restaurantQueue}>{item?.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyListComponent = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
      }}>
      <ActivityIndicator
        size={PixelRatio.getPixelSizeForLayoutSize(13)}
        color={'lightblue'}
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
  return (
    <>
      <FlatList
        data={resturantData}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={renderEmptyListComponent}
      />
    </>
  );
};

export default RestaurantItems;
