import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../utils/redux/hook';
import {colors} from '../../utils/colors';

interface ToolbarProps {
  menuButtonText: string;
  menuBtn: () => {};
}

const Toolbar = (props: ToolbarProps) => {
  const homeToolbarText = useAppSelector(
    state => state.homeToolbarSlice.homeToolbarText,
  );
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
          {props.menuButtonText}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Toolbar;

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
  },
});
