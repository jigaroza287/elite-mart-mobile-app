import React from 'react';
import { View, ViewProps } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import styles from './style';
import { colors } from '../../theme';
import normalize from 'react-native-normalize';

interface StarRatingProps extends ViewProps {
  rating: number;
  maxStars?: number;
  starSize?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const StarIcon = ({
  fillPercentage,
  size,
  activeColor,
  inactiveColor,
}: {
  fillPercentage: number;
  size: number;
  activeColor: string;
  inactiveColor: string;
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {/* Full star path */}
      <Path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={inactiveColor}
      />
      <Defs>
        {/* Clip path to fill the star dynamically */}
        <ClipPath id="clip">
          <Rect
            x="0"
            y="0"
            width={`${fillPercentage}%`}
            height="100%"
            fill={activeColor}
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip)">
        <Path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={activeColor}
        />
      </G>
    </Svg>
  );
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  starSize = normalize(24),
  activeColor = colors.grey,
  inactiveColor = colors.lightGrey,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const starRating = Math.min(Math.max(rating - index, 0), 1);
        return (
          <StarIcon
            key={index}
            fillPercentage={starRating * 100}
            size={starSize}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
        );
      })}
    </View>
  );
};

export default StarRating;
