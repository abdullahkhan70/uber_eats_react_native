import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../utils/colors';

interface IconsProps {
  iconName: string;
  text: string;
}
const Icons = ({iconName, text}: IconsProps) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={iconName}
          size={24}
          color={colors.black}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            alignSelf: 'center',
            color: colors.black,
            fontWeight: '700',
            fontSize: 13,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Icons;
