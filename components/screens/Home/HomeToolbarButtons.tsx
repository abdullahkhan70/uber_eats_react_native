import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils/colors';
import {useAppSelector} from '../../utils/redux/hook';

interface ToolbarProps {
  menuButtonText: string;
  menuBtn: () => {};
}

const HomeToolbarButtons = (props: ToolbarProps) => {
  const homeToolbarText = useAppSelector(
    state => state.homeToolbarSlice.homeToolbarText,
  );
  useEffect(() => {
    console.log('The home toolbar text: ', homeToolbarText);
  }, []);
  return (
    <>
      <TouchableOpacity
        onPress={props.menuBtn}
        style={{
          ...styles.menuBtnStyle,
          backgroundColor:
            homeToolbarText == props.menuButtonText
              ? colors.black
              : colors.white,
        }}>
        <Text
          style={{
            ...styles.menuBtnText,
            color:
              homeToolbarText == props.menuButtonText
                ? colors.white
                : colors.black,
          }}>
          {props.menuButtonText.charAt(0).toUpperCase() +
            props.menuButtonText.slice(1)}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeToolbarButtons;

const styles = StyleSheet.create({
  menuBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuBtnStyle: {
    borderRadius: 40,
    alignSelf: 'center',
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(5),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(3),
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(3),
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
});
