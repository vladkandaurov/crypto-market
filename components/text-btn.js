import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS, FONTS } from '../constants';

export const TextBtn = ({ label, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 18,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 15,
        backgroundColor: COLORS.gray1,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{label}</Text>
    </TouchableOpacity>
  );
};
