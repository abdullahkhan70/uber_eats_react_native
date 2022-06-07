import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  checkMarkAnimation: {
    height: 100,
    alignSelf: 'center',
    // marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    textAlign: 'center',
  },
});
