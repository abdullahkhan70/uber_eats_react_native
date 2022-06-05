import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {colors} from '../../utils/colors';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  homeToolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  restaurantMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  restaurantQueueView: {
    width: 35,
    height: 35,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginRight: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  restaurantQueue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
  },
  restaurantWaitingTimingText: {
    fontWeight: '700',
    color: colors.lightGray,
  },
  restaurantWaitingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: -PixelRatio.getPixelSizeForLayoutSize(3),
  },
  restaurantTitle: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
    width: width - 20,
  },
  restaurantImageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  restaurantImage: {
    width: width - 20,
    alignSelf: 'center',
    height: 200,
  },
  categoryIcons: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  categoryTitle: {
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
  },
  categoryContainer: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  categoryBtn: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
  },
  searchBarRenderLeftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 12,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  searchBarRenderRightButton: {
    marginRight: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  searchBarMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  googlePlacesMainView: {
    backgroundColor: 'black',
  },
});
