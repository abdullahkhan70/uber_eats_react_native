import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  homeToolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  searchBarRenderLeftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 12,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  searchBarMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  googlePlacesMainView: {
    backgroundColor: 'black',
  },
});
