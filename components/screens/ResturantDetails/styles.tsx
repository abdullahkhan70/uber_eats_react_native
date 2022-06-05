import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  aboutImage: {
    width: width,
    height: 200,
  },
  viewCartText: {
    fontSize: 20,
    color: colors.white,
  },
  addToCartTotalPrice: {
    color: colors.white,
    fontSize: 16,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  viewCartMainView: {
    position: 'absolute',
    bottom: PixelRatio.getPixelSizeForLayoutSize(10),
    width: width,
  },
  viewCartBtn: {
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  menuItemsPrice: {
    fontSize: 14.5,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(1),
    color: 'gray',
    fontWeight: '800',
  },
  dividered: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(0.7),
    width: width - 25,
    alignSelf: 'center',
  },
  menuItemsDescription: {
    fontSize: 13.5,
    fontWeight: '400',
    width: width / 1.7,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(1),
    color: colors.black,
  },
  aboutInnerView: {
    width: width,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(3),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  menuItemsMainView: {
    flexDirection: 'row',
    width: width - 20,
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(2),
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    // marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  menuItemTitle: {
    width: width / 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    // marginBottom: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  menuItemImage: {
    width: 90,
    height: 100,
    borderRadius: 20,
    marginRight: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    width: width - 20,
  },
  descriptionText: {
    color: colors.black,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(6.5),
  },
});
