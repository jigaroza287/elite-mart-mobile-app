import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import style from './style';

interface SquareImageWithLabelProps {
  imageUrl: string;
  label: string;
  size?: number;
}

const SquareImageWithLabel: React.FC<SquareImageWithLabelProps> = ({
  imageUrl,
  label,
  size = Dimensions.get('window').width / 4,
}) => {
  return (
    <View style={[style.container, { width: size }]}>
      <Image
        source={{ uri: imageUrl }}
        style={[style.image, { width: size, height: size }]}
        resizeMode="cover"
      />
      <Text style={style.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

export default SquareImageWithLabel;
