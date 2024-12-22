import React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import style from './style';

interface BulletListProps {
  items: string[];
  bulletStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const BulletList: React.FC<BulletListProps> = ({
  items,
  bulletStyle,
  textStyle,
  containerStyle,
}) => {
  return (
    <View style={[style.container, containerStyle]}>
      {items.map((item, index) => (
        <View key={index} style={style.item}>
          <Text style={[style.bullet, bulletStyle]}>•</Text>
          <Text style={[style.text, textStyle]}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default BulletList;
