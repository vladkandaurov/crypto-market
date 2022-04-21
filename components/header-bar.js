import React from 'react';
import { Text, View } from 'react-native';

import { SIZES, COLORS, FONTS } from '../constants';

export const HeaderBar = ({ title }) => {
  return (
    <View
      style={{
        height: 100,
        paddingHorizontal: SIZES.radius,
        justifyContent: 'flex-end',
      }}>
      <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>{title}</Text>
    </View>
  );
};
